import React, { useLayoutEffect, useState } from "react";
import { ImageURISource, Platform } from "react-native";
import FastImage, { ImageStyle } from "react-native-fast-image";

export interface AutoImageProps extends ImageProps {
  maxWidth?: number;
  maxHeight?: number;
  imgStyle?: ImageStyle;
  source: ImageURISource;
}

export function useAutoImage(
  remoteUri: string,
  dimensions?: [maxWidth?: number, maxHeight?: number]
): [width: number, height: number] {
  const [[remoteWidth, remoteHeight], setRemoteImageDimensions] = useState([
    0, 0,
  ]);

  const remoteAspectRatio = remoteWidth / remoteHeight;
  const [maxWidth, maxHeight] = dimensions ?? [];

  useLayoutEffect(() => {
    if (!remoteUri) return;

    FastImage.preload([
      {
        uri: remoteUri,
      },
    ]);
  }, [remoteUri]);

  if (Number.isNaN(remoteAspectRatio)) return [0, 0];

  if (maxWidth && maxHeight) {
    const aspectRatio = Math.min(
      maxWidth / remoteWidth,
      maxHeight / remoteHeight
    );
    return [remoteWidth * aspectRatio, remoteHeight * aspectRatio];
  } else if (maxWidth) {
    return [maxWidth, maxWidth / remoteAspectRatio];
  } else if (maxHeight) {
    return [maxHeight * remoteAspectRatio, maxHeight];
  } else {
    return [remoteWidth, remoteHeight];
  }
}

export function AutoImage(props: AutoImageProps) {
  const { maxWidth, maxHeight, ...ImageProps } = props;
  const source = props.source as ImageURISource;

  const [width, height] = useAutoImage(
    Platform.select({
      default: source?.uri as string,
    }),
    [maxWidth, maxHeight]
  );

  return (
    <FastImage
      {...ImageProps}
      style={[{ width, height }, props.imgStyle]}
      resizeMode="cover"
    />
  );
}
