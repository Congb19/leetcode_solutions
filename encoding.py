import os
 
def fileGb2312ToUtf8(filename):
	with open(filename, "r") as binary_file:
		data = binary_file.read()
 
	with open(filename, "wb") as binary_file:
		buff = b'\xef\xbb\xbf'
		binary_file.write(buff)
 
	with open(filename, "ab") as binary_file:
		try:
			result = data.encode("utf-8")
			binary_file.write(result)
		except Exception as err:
			print(filename)
			print(err)
 
 
def fileExtension(filename): 
  return os.path.splitext(filename)[1] 
 
def cmp(a, b):
	return (a > b) - (a < b)
 
def isCodeFile(filename):
	extension = fileExtension(filename)
	return (cmp(extension, '.h') == 0) or (cmp(extension, '.cpp') == 0) or (cmp(extension, '.cs') == 0 ) or (cmp(extension, '.js') == 0)
 
 
def isUtf8File(filename):
	with open(filename, "rb") as binary_file:
		binary_file.seek(0)
		data = bytearray(binary_file.read(3))
		return data[0] == 0xef and data[1] == 0xbb and data[2] == 0xbf
	return False
 
 
def dirGb2312ToUtf8(dir):
	list = []
	for path,dirs,fs in os.walk(dir):
		for f in fs:
			fullPath = os.path.join(path,f)
			list.append(fullPath)
 
	for i, filename in enumerate(list):
		if (isUtf8File(filename)):
			print(filename + ' encode is utf8 already!')
			continue
		if (isCodeFile(filename)):
			fileGb2312ToUtf8(filename)
 
 
dirGb2312ToUtf8('W:\leetcode_solutions\js')