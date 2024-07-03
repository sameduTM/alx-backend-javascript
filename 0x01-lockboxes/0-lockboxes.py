#!/usr/bin/python3
"""Write a method that determines if all the boxes can be opened.
"""


def canUnlockAll(boxes):
    """
    Determine if all boxes can be opened.

    Parameters:
    boxes (list of lists): Each inner list contains keys for other boxes.

    Returns:
    bool: True if all boxes can be opened, else False.
    """
    # Number of boxes
    n = len(boxes)

    # Set to keep track of unlocked boxes
    unlocked = set()

    # The first box (box[0]) is initially unlocked
    unlocked.add(0)

    # List to keep track of keys we have
    keys = [0]

    # While there are keys to process
    while keys:
        # Get the next key
        key = keys.pop()

        # Get all the keys from the box corresponding to the current key
        for new_key in boxes[key]:
            if new_key < n and new_key not in unlocked:
                unlocked.add(new_key)
                keys.append(new_key)

    # Check if all boxes are unlocked
    return len(unlocked) == n
