import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';

export default function Camera() {
  const [isCameraOpen, setIsCameraOpen] = React.useState(false);

  const handleOpenCamera = async () => {
    try {
      const { status } = await RNCamera.requestCameraPermission();
      if (status === 'granted') {
        setIsCameraOpen(true);
      } else {
        console.error('Camera permission not granted');
      }
    } catch (error) {
      console.error('Error occurred while requesting camera permission:', error);
    }
  };

  const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
    //   const imagePath = `${RNFS.DocumentDirectoryPath}/photos/photo.jpg`;
      const imagePath = `/photos/photo.jpg`;
      RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/photos`);
      RNFS.moveFile(data.uri, imagePath)
        .then(() => {
          console.log('Photo moved to:', imagePath);
        })
        .catch(error => {
          console.error('Error moving photo:', error);
        });
    }
  };

  return (
    <View style={styles.container}>
      {!isCameraOpen ? (
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Click the button to open the camera</Text>
          <Button title="Open Camera" onPress={handleOpenCamera} />
        </View>
      ) : (
        <View style={styles.cameraContainer}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.cameraPreview}
            type={RNCamera.Constants.Type.back}
            autoFocus={RNCamera.Constants.AutoFocus.on}
          />
          <Button title="Take Picture" onPress={takePicture} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
  cameraPreview: {
    flex: 1,
  },
});
