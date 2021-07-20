import matplotlib.pyplot as plt
import random

from daugman_visual_explanation import DaugmanVisualExplanation
from daugman import find_iris

# fixed size for matplotlib output
plt.rcParams['figure.figsize'] = [5, 5]
# for replicability
random.seed(2020)

dve = DaugmanVisualExplanation('eye.jpg')

dve.plot_pixel_intensity_delta_pic()
# plot all potential iris centers
img_dot = dve.plot_all_potential_iris_centers()
img_circles = dve.plot_circles_for_one_center(img_dot, dot_idx=0)

_ = dve.plot_best_circle_for_a_few_potential_iris_centers(img_dot, [0])
# plot best circle for every 20th potential iris center
_ = dve.plot_best_circle_for_a_few_potential_iris_centers(img_dot, range(0, len(dve.all_points), 20))

_ = dve.find_iris(daugman_start=10, daugman_end=30, daugman_step=2, points_step=3)

_ = dve.find_iris(daugman_start=10, daugman_end=30, daugman_step=1, points_step=3)
_ = dve.find_iris(daugman_start=10, daugman_end=50, daugman_step=1, points_step=1)
dve.find_iris_on_binary_image(daugman_start=10, daugman_end=30, daugman_step=2, points_step=1)
dve.find_iris_on_binary_image(daugman_start=10, daugman_end=30, daugman_step=10, points_step=1)