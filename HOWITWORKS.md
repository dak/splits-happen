# JavaSript Bowling Score Calculator

## Explanation

I was looking to take a little bit of a different approach with this problem, so rather than simply to loop through all the frames and add them up, I've instead turned it into a more functional solution using map/reduce.

One of the nice things about this solution is that it is quite easy to modify to support any arbitrary number of frames, so it can be used to give scores for individual frames or for a 15 frame game of bowling.

The code is fairly spartan in that it's just the few necessary functions to make it work, as that seemed to be all the requirements asked for. It could be fairly easily adapted into a class or object with some helper methods and more error checking, though. Doing so would also allow some of the code to be cleaned up, as it would no longer be necessary to continuously pass the array around by reference to the different functions.

## How It Works

The below example assumes an input of `'X999999999/1'`.

 1. Turn the string into an array: `['X', 9, 9, 9, 9, 9, 9, 9, 9, 9, '/', 1]`
 2. Strip off the 10th frame and do substitutions on it, then add it back: `['X', 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1]`
 3. Expand strikes and spares to include the values relevant to them: `[['X', 9, 9], 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1]`
 4. Flatten the array: `['X', 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1]`
 5. Sum it all up, making substitutions (eg, 'X' => 10): `111`
