Font Recognition Web App
========================

A web application for recognizing fonts in images, built with React and Flask. Users can upload images, identify fonts, preview sample text in the detected font, and download the corresponding font file.

Features
--------

*   **Image Upload**: Upload an image containing text to identify its font.
    
*   **Font Prediction**: The app processes the image, recognizes the font, and displays its name.
    
*   **Text Preview**: Preview sample text using the identified font for visual reference.
    
*   **Font Download**: Download the identified font file directly from the app.
    

Tech Stack
----------

*   **Frontend**: React
    
*   **Backend**: Flask (Python)
    
*   **Machine Learning Model**: Keras (.keras model file for font recognition)
    
*   **Database**: MySQL (optional, if database storage is required)
    

Setup and Installation
----------------------

### Prerequisites

*   Node.js and npm
    
*   Python 3.x
    
*   Flask
    
*   MySQL (if database is required)
    
*   keras, tensorflow, flask, and flask\_cors Python packages
    

### Clone the Repository

```bash
git clone https://github.com/ravindusenavirathna/font-recognition-app.git
cd font-recognition-app
```

### Backend Setup (Flask)


1. Navigate to the backend directory:
```bash
cd backend
```
2. Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

3. Install the required packages:
```bash
pip install -r requirements.txt
```

4. Place your trained model file (e.g., `font_recognition_model.keras`) in the `model` directory.
5. Run the Flask server:
```bash
python app.py
```    

### Frontend Setup (React)

1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the React development server:
```bash
npm start
```
    

### Configuration

*   Update the Flask server URL in `frontend/src/ImageUpload.jsx` if your backend runs on a different address or port.
    
*   Ensure the Flask CORS settings in `app.py` allow requests from your React frontend's address (usually `http://localhost:3000`).
    

Usage
-----

1.  Launch both the Flask and React servers.
    
2.  In the React app, upload an image with text.
    
3.  The app will display the identified font on the right side, with a sample text preview and a download link for the font file.
    

License
-------

This project is licensed under the MIT License.

Acknowledgements
----------------

*   [**`React`**](https://reactjs.org/)
    
*   [**`Flask`**](https://flask.palletsprojects.com/en/stable/)
    
*   [Keras](https://keras.io/)
    
*   Special thanks to all open-source contributors!
