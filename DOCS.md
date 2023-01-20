
# Star Rating
Previous
```
const ratingRounded = Math.round(localRating * 2) / 2;
```
New Changes:
```
const ratingRounded = Math.round(localRating * (2-Number(isRounded))) / (2 - Number(isRounded));
```
What i'm doing basicly is nullify the divider function

# Card Swiper

Card Swiper is a deck component that stack a list of card. It can swipe in/out the card and compatible in iOS, android and web.
It can wrap children components such a card, text, image and etc.

This component can wrap component in two ways.

| Property                  | description                                                          
| :-------------------------| :------------------------------------------------------------------- 
| By children               | The children accept single/multiple component where each child wrapped by CardSwiperItem.                            
| By data and renderItem    | You can suply data with type of array, and render each item using renderItem                        

Another property (Basic)

| Property               | description                                                          
| :-------------------   | :------------------------------------------------------------------- 
| horizontalSwipe        | Allow swipe in horizontal direction  
| verticalSwipe          | Allow swipe in vertical direction
| onIndexChanged         | Trigger when card swiped
| onEndReached           | Trigger when all card swiped                                              
| swipeAnimationDuration | Animation duration

Another property (Advance)

| Property               | description                                                          
| :-------------------   | :------------------------------------------------------------------- 
| stackScale             | Reduced size each underlying card by a percentage  
| stackSeparation        | Vertical separation between underlying card
| stackAnimationFriction | Animation friction
| stackAnimationTension  | Animation tension