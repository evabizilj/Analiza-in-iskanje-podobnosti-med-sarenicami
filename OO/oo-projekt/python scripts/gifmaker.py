import imageio
import os

def assemble_animated_gif(dir_path, filenames, filename_out):
    filepath_out = os.path.join(dir_path, filename_out)
    images = []
    for filename in filenames:
        temp = os.path.join(dir_path, filename)
        image = imageio.imread(temp)
        images.append(image)
    imageio.mimsave(filepath_out, images, format='GIF', duration=0.5)

def assemble_filenames(name, number):
    filenames = []
    for i in range(1, number, 1):
        s = "{}{}.png".format(name, i)
        filenames.append(s)
    return filenames

def glMetoda(datoteka,counter):
    dir_path = "C:/Users/guide/Documents"
    filenames = assemble_filenames(datoteka+"/Clustered_Image_", 30)
    assemble_animated_gif(dir_path, filenames, "GIF_made_"+str(counter)+".gif")

"""
if __name__ == "__main__":
    main()
"""