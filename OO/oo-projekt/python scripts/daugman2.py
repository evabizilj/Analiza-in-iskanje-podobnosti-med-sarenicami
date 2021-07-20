import matplotlib.pyplot as plt
import cv2
import numpy as np
from daugman import find_iris
# read, square crop and grayscale image of an eye
img = cv2.imread('eye.jpg')
img = img[20:130, 20:130]
gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

_ = plt.imshow(gray_img, cmap='gray')
# minimal iris radius -- 10px
# maximal iris radius -- 30px
answer = find_iris(gray_img, daugman_start=10, daugman_end=30, daugman_step=1, points_step=3)
print(answer)

iris_center, iris_rad = answer
# plot result
out = img.copy()
cv2.circle(out, iris_center, iris_rad, (0, 0, 255), 1)
_ = plt.imshow(out[::,::,::-1])