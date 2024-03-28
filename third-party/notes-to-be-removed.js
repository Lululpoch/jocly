
navigator.xr.requestDevice().then(function (device) {
    console.log("XR device", device);
    device.requestSession({
        immersive: true,
        //exclusive: true,
        //requiredFeatures: ["local-floor", "bounded-floor", "hand-tracking", "hand-tracking-gestures"],
        //optionalFeatures: ["hand-tracking", "hand-tracking-gestures"],
        //domOverlay: { root: document.body },
    }).then(function (session) {
        console.log("XR session", session);
        session.updateRenderState({
            baseLayer: new XRWebGLLayer(session, ctx.renderer)
        });
        session.requestAnimationFrame(function (time, frame) {
            console.log("XR frame", frame);
            var pose = frame.getViewerPose();
            if (pose) {
                var view = pose.views[0];
                ctx.camera.projectionMatrix.fromArray(view.projectionMatrix);
                var viewMatrix = new THREE.Matrix4().fromArray(view.transform.inverse.matrix);
                ctx.camera.matrix.getInverse(viewMatrix);
                ctx.camera.updateMatrixWorld(true);
                ctx.camera.matrixWorldInverse.getInverse(ctx.camera.matrixWorld);
                ctx.cameraControls.update();
                ctx.cameraOrientationControls.update();
                ctx.animControl.trigger();
            }
            session.requestAnimationFrame(arguments.callee);
        });
    }).catch(function (error) {
        console.error("XR session error", error);
    });
}).catch(function (error) {
    console.error("XR device error", error);
});