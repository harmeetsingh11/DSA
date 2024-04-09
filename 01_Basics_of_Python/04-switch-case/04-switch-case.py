from typing import *
import math


def areaSwitchCase(ch: int, a: List[float]):
    area = 0.0
    if ch == 1:  # Circle
        area = math.pi * a[0] * a[0]
    elif ch == 2:  # Rectangle
        area = a[0] * a[1]

     # Returning the calculated area upto 5 decimal places.
    return "{:.5f}".format(area)
