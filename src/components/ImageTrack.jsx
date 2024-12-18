import React, { useEffect, useRef } from "react";
import Tilt from 'react-parallax-tilt';

import "../styles/imagetrack.css"

export default function ImageTrack() {

    const trackRef = useRef()

    useEffect(() => {
        const track = trackRef.current

        window.onload = function () {
        }

        // Checks if browser is mobile or tablet
        window.mobileAndTabletCheck = function () {
            let check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };

        var isMobile = window.mobileAndTabletCheck();

        console.log(isMobile)

        function doJs() {
            if (isMobile) {
                mobileMoveX()
            } else {
                desktopMoveX()
            }

        }
        doJs()

        // Mobile X
        function mobileMoveX() {
            window.addEventListener('touchstart', function (e) {
                track.dataset.mouseDownAt = e.targetTouches[0].pageX
            })

            window.addEventListener('touchend', function (e) {
                track.dataset.mouseDownAt = "0"
                track.dataset.prevPercentage = track.dataset.percentage;
            })

            window.addEventListener('touchmove', function (e) {
                changeTarget();

                if (track.dataset.mouseDownAt == "0") return;

                const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.targetTouches[0].pageX,
                    maxDelta = window.innerWidth / 2;

                const percentage = (mouseDelta / maxDelta) * -100,
                    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

                track.dataset.percentage = nextPercentage;

                track.style.transform = `translate(${nextPercentage}%, -50%)`

                console.log(nextPercentage)

                track.animate({
                    transform: `translate(${nextPercentage}%, -50%)`
                }, { duration: 1200, fill: "forwards" });

                for (const image of track.getElementsByClassName("image")) {
                    image.animate({
                        objectPosition: `${100 + nextPercentage}% center`
                    }, { duration: 1200, fill: "forwards" });
                }
            })
        }

        // Desktop X
        function desktopMoveX() {
            window.onmousedown = e => {
                track.dataset.mouseDownAt = e.clientX;
                track.dataset.mouseDown = e.clientY;
            }

            window.onmouseup = e => {
                track.dataset.mouseDownAt = "0";
                track.dataset.mouseDown = "0";
                track.dataset.prevPercentage = track.dataset.percentage;
                track.dataset.previous = track.dataset.percentageY;
            }

            window.onmousemove = e => {

                if (track.dataset.mouseDownAt == "0" || track.dataset.mouseDown == "0") return;

                let mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                    maxDelta = window.innerWidth;


                // const mouseDeltaY = parseFloat(track.dataset.mouseDown) - e.clientY,
                //     maxDeltaY = window.innerHeight / 2;

                const percentage = (mouseDelta / maxDelta) * -100,
                    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -300);

                track.dataset.percentage = nextPercentage;

                // const percentageY = (mouseDeltaY / maxDeltaY) * -100
                // const nextPercentageUnconstrainedY = parseFloat(track.dataset.previous) + percentageY
                // console.log(track.dataset.previous)
                // const nextPercentageY = Math.max(Math.min(nextPercentageUnconstrainedY, 0), -100);

                // track.dataset.percentageY = nextPercentageY;

                const nextPercentageY = -50

                console.log(nextPercentage)

                track.style.transform = `translate(${nextPercentage}%, ${nextPercentageY}%)`

                track.animate({
                    transform: `translate(${nextPercentage}%, ${nextPercentageY}%)`
                }, { duration: 1200, fill: "forwards" });

                for (const image of track.getElementsByClassName("image")) {
                    image.animate({
                        objectPosition: `${100 + nextPercentage / 5}% center`
                    }, { duration: 1200, fill: "forwards" });
                }

            }
        }
    })

    return (

        <div className="mt-56 w-full h-full relative">
            <div ref={trackRef} id="image-track" data-mouse-down-at="0" data-prev-percentage="0" data-mouse-down="0" data-previous="0">
                <img class="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
            </div>
        </div>

    )

}