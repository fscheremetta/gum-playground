const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstraints);

const changeVideoSize = () => {
    stream.getVideoTracks().forEach((track) => {
        const capabilities = track.getCapabilities();
        const height = document.querySelector("#vid-height").value;
        const width = document.querySelector("#vid-width").value;

        // track is a video track
        // we can get its capabilities from .getCapabilities()
        // or we can apply new constraints with applyConstraints()
        const vContraints = {
            height: {
                exact:
                    height < capabilities.height.max
                        ? height
                        : capabilities.height.max,
            },
            width: {
                exact:
                    width < capabilities.width.max
                        ? width
                        : capabilities.width.max,
            },
            // frameRate: 5,
        };
        track.applyConstraints(vContraints);
    });

    // stream.getTracks().forEach((track) => {
    //     const capabilities = track.getCapabilities();
    //     console.log(capabilities);
    // });
};
