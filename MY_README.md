What do we need to do?

1: Set up an event listener to respond to a user action
2: Submit a request to a mocked-up server
3: Update the DOM based on the mock servers response

To start we need to build an outline


First:

We need to add a hidden class to the error modal in HTML - I looked at how to do this and chose to grab the HTML element ID in my JS file. 

Third:

Add a setTimeout to hide the modal after 3 seconds


Second:

We need to write a function that changes the EMPTY_HEART to a FULL_HEART and add the .activated-heart class to make the heart appear red

And then when a user clicks on a full heart, it changes the heart back to an empty heart and we remove the .activated-heart class.

Trouble shooting error messages in the DOM... Reference for Fridays work

1st error message I got was because I forgot to include defer in my script tag in my HTML 
2nd error message I got is because I was using querySelector instead of querySelectorAll - I was getting a Error Type message
3rd error message I'm getting is because my heart button wasnt declared as a function, so all of the variables created prior weren't tied to an functional function?


Other than that I think the function, request, and format is correct. 

It was not that article class, it was deeper than that, we're targeting the .class "like"


Third:

We need to invoke our given function mimicServerCall to simulate making a server request 

Instead of sending to our server, we invoke this function.

Fourth:

We must create a function that changes the heart, when a user clicks it it fills up, and when they click it again it empties

Debug- everything is working perfectly, but the test is now giving back expected null to equal null for the hidden modal...

Tried adding hidden to HTML modal tag
Realized I didn't have DOMContentLoaded in my js file, added that.







