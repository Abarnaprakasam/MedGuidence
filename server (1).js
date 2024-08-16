const express = require('express');
const path = require('path');
const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

const app = express();
const port = 3000;

const key = "";
const endpoint = "https://simple-document-reader.cognitiveservices.azure.com";

app.get('/invoke-script', async (req, res) => {
    try {
        const formUrl = req.query.formUrl;
        
        if (!formUrl) {
            res.status(400).send("Form URL is required.");
            return;
        }

        const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
        const poller = await client.beginAnalyzeDocumentFromUrl("prebuilt-document", formUrl);
        const { content, pages, languages, styles } = await poller.pollUntilDone();

        let result = "";
        if (pages.length <= 0) {
            console.log("No pages were extracted from the document.");
          } else {
            console.log("Pages:");
            for (const page of pages) {        
              if (page.lines.length > 0) {        
                for (const line of page.lines) {
                    result += `"${line.content}"`;
                  console.log(`  - "${line.content}"`);
                }
              }
            }
          }
          res.send(result);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Handle the root path
app.get('/', (req, res) => {
    res.send("Welcome to the server!");
});

// Handle the root path
app.get('/start', (req, res) => {
    // Send the 'index.html' file
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
