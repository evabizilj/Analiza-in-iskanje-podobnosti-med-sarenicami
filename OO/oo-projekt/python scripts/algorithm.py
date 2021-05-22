import numpy as np
import cv2 
from matplotlib import pyplot as plt
from PIL import Image
import glob
import os
import gifmaker

# NUJNO PRETVORIT iz BGR v RGB (OpenCV default je BGR standard)
#	img = cv2.cvtColor(cv2.imread('001L_1.png'), cv2.COLOR_BGR2RGB)
#	imgplot = plt.imshow(img)
#	plt.show()

def K_Means(Image, K):

	#Img.shape vrne dimenzije (1. dolzina x 2. sirina) in stevilo barvnih kanalov
	#1. grayscale (1 kanal)
	if(len(Image.shape) < 3):
		Z = Image.reshape((-1,1))
	#2. barvna slika (3 kanale)
	elif(len(Image.shape) == 3):
		Z = Image.reshape((-1,3))

	#pretvorimo v 32-bit float
	Z = np.float32(Z)

	#kriterij natancnosti
	criteria = (cv2.TERM_CRITERIA_EPS + cv2. TERM_CRITERIA_MAX_ITER, 5, 1.0)

	#k-means
	ret, label, center = cv2.kmeans(Z, K, None, criteria, 5, cv2.KMEANS_RANDOM_CENTERS)

	#pretvorimo nazaj 32 float v 8 uint
	center = np.uint8(center)
	res = center[label.flatten()]
	Clustered_Image = res.reshape((Image.shape))

	return Clustered_Image


def main():
	"""

	imeDatoteke = "GIF_Slike_"
	counter = 1

	for i in range(0,1):
		stringFilename = "iris"+str(1+8*i)+"_"+str(1+8*i+7)

		images = glob.glob(stringFilename+"/*.png")

		for image in images:

			datoteka = imeDatoteke+str(counter)
			os.mkdir(datoteka)
			
			Input_Image = cv2.imread(image)	
			for x in range(1,30):
				Clusters = x
				Clustered_Image = K_Means(Input_Image, Clusters)

				string=datoteka+"/Clustered_Image_"+str(x)+".png"
				cv2.imwrite(string, Clustered_Image)
			
			gifmaker.glMetoda(datoteka,counter)
			counter += 1
	
	"""
	
	Input_Image = cv2.imread("002R_3.png")

	#array_imen = 
	for x in range(1,30):
		Clusters = x
		Clustered_Image = K_Means(Input_Image, Clusters)

		string="GIF2/Clustered_Image_"+str(x)+".png"
		cv2.imwrite(string, Clustered_Image)
		
	mapa = "GIF2"	
	gifmaker.glMetoda(mapa,2)
	

if __name__ == "__main__":
	main()
