# Pixabay Image Search Project - SketchDeck.ai

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task
 - Create a web app that allows users to search for images using the Pixabay API.
 - Upon searching for images, the app should display a list of images that match the search query.
 - The app should display the image title, image description, image URL, image author, and image published date.

Additional: 
- Add a landing page for the app that shows the editor's choice before someone can search for images.

## Available Scripts

See package.json for scripts

## API details
- https://pixabay.com/api/docs/


## Sample Response
```
Endpoint: https://pixabay.com/api/

Response:
{
"total": 4692,
"totalHits": 500,
"hits": [
    {
        "id": 195893,
        "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
        "type": "photo",
        "tags": "blossom, bloom, flower",
        "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
        "previewWidth": 150,
        "previewHeight": 84,
        "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 360,
        "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
        "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
        "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
        "imageWidth": 4000,
        "imageHeight": 2250,
        "imageSize": 4731420,
        "views": 7671,
        "downloads": 6439,
        "likes": 5,
        "comments": 2,
        "user_id": 48777,
        "user": "Josch13",
        "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
    },
    {
        "id": 73424,
        ...
    },
    ...
]
}
```
