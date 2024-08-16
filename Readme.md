# MedGuidance - Image Text Extraction & Personal Recommendation Demo

This demo utilizes Node.js and Express along with the Azure Form Recognizer SDK to extract text from images and uses OpenAI API to offer personal recommendations from the extracted texts. Before starting the demo, **create API Keys for Azure Document Intelligence and Open AI** and configure them in the code. Follow the steps below to set up and run the demo:

## Installation

1. Install the required npm packages by running the following commands in your terminal or command prompt:

   ```bash
   npm install express
   npm install @azure/ai-form-recognizer
   ```

2. Change into the `Demo` directory:

   ```bash
   cd Demo
   ```

3. Start the Node.js server:

   ```bash
   node server.js
   ```

## Usage

1. Once the server starts, open your web browser and navigate to [http://localhost:3000/start](http://localhost:3000/start).

2. You will land on the homepage of MedGuidance. Input the URL of the image you want to extract text from in the text box.

3. Click on the "Invoke Script" button.

4. The demo will utilize Azure Form Recognizer to extract text from the provided image.

5. Once the texts are extracted, the array of words will be sent to Open AI API for personal recommendation.

For the Demo, I have used this [image](https://insulinnation.com/wp-content/uploads/2017/03/image2.jpeg). Feel free to use any prescription image of your choice.

<img width="1508" alt="image" src="https://github.com/AbarnaSivaprakasam/MedGuidance/assets/83536502/beafdd81-2bcf-4f4b-9e82-8d6f4e5c09bf">



Feel free to customize the code and integrate it into your projects!

