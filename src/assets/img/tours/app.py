import os

# Get current directory
current_dir = os.getcwd()

# Valid image extensions
image_extensions = ('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.webp')

# List image files in current directory
image_files = [f for f in os.listdir(current_dir) if f.lower().endswith(image_extensions)]

for file in image_files:
  name = file.split('.')[0].capitalize()
  print(f"import {name} from \"../assets/img/tours/{file}\"")

data = []
for file in image_files:
  name = file.split('.')[0].capitalize()
  data.append({
    "img": name,
    "title": name,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet vero."
  })
print(data)