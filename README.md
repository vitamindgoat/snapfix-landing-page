# Handwritten Digit Recognizer

Draw a digit from 0 to 9 and a convolutional neural network (CNN) guesses it live, right in your browser.

**[Try the live demo](https://vitamindgoat-digit-recognizer.static.hf.space/index.html)**

## About

I built this to learn how neural networks actually work, instead of just using them. I trained a small convolutional neural network in Python on the MNIST dataset of handwritten digits, then set it up to run entirely in the browser. There is no server and nothing to install. You draw on the canvas, and the model predicts the number in real time.

## Features

- Draw any digit (0 to 9) on the canvas and get an instant prediction
- A convolutional neural network (CNN) does the recognition
- Runs fully in the browser, on desktop or phone
- Clear the canvas and try again as many times as you want

## How it works

1. The model is a convolutional neural network trained on the MNIST dataset of handwritten digits.
2. Your drawing is captured from the canvas and resized to the 28x28 grayscale format the model expects.
3. The model runs in the browser and returns the digit it thinks you drew.

## Built with

- Python (model training)
- A convolutional neural network (CNN)
- MNIST dataset
- HTML, CSS, and JavaScript for the in-browser app
- Hosted on Hugging Face Spaces

## Run it locally

This is a static site, so you can open `index.html` directly in your browser. To serve the folder instead, run any static server:

```
python -m http.server
```

Then open `http://localhost:8000`.

## License

MIT. See the `LICENSE` file for details.

---

Built by Oleksandr Rybitskyi.
GitHub: [@vitamindgoat](https://github.com/vitamindgoat) · Hugging Face: [@vitamindgoat](https://huggingface.co/vitamindgoat)
