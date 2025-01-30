import { CSSProperties } from "react"
import { Img, staticFile, useCurrentFrame, Audio, interpolate, Video } from "remotion"

const HappyBirthday = () => {
    const video = {
        frame: useCurrentFrame(),
    }
    const effects = {
        moveUp: (frames: number[], magnitude: number[]) => interpolate(video.frame, frames, magnitude, { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        fadeIn: (frames: number[], magnitude: number[]) => interpolate(video.frame, frames, magnitude, { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
    }
    const styles: { [key in Styles]: CSSProperties } = {
        container: {
            width: '100%',
            height: '100%',
            opacity: effects.fadeIn([0, 800, 839], [1,1,0])
        },
        background: {
            width: '100%',
            height: '100%',
        },
        balloon: {
            position: 'absolute',
            zIndex: 1,
        },
        flip: {
            transform: 'scaleX(-1)'
        },
        main: {
            position: 'absolute',
            top: '15%',
            left: 'calc(50% - 350px)',
            width: '700px'
        },
        text: {
            fontSize: '100px',
            position: 'absolute',
            width: '100%',
            top: '70%',
            left: 0,
            textAlign: 'center'
        },
        cake: {
            position: 'absolute',
            top: `${effects.moveUp([0, 620, 680], [120, 120, 63])}%`,
            left: '40%',
            width: '400px'
        },
        crown: {
            position: 'absolute', 
            top: '25%',
            left: '46%',
            zIndex: 3,
            width: '200px',
            opacity: effects.fadeIn([0, 620, 680], [0, 0, 1])
        }
    }
    const balloonStyle = (
        flip: boolean,
        left: number,
        top: { frames: number[], magnitude: number[] },
        hideTillFrame: number
    ): CSSProperties => {
        const isFlip = flip ? { ...styles.flip } : {}
        return {
            ...styles.balloon,
            ...isFlip,
            left: `${left}%`,
            top: `${effects.moveUp(top.frames, top.magnitude)}%`,
            opacity: `${effects.fadeIn([0, hideTillFrame - 1, hideTillFrame], [0, 0, 1])}`
        }
    }
    const giuImage = (): CSSProperties => {
        return {
            ...styles.main,
            opacity: `${effects.fadeIn([0, 45, 60], [0, 0, 1])}`
        }
    }
    const text = (frames: [number, number, number, number, number], fontNum: number): CSSProperties => {
        const fonts = ["Satisfy", "Great Vibes", "Sacramento", "Cookie", "Pacifico"]

        return {
            ...styles.text,
            opacity: `${effects.fadeIn(frames, [0, 0, 1, 1, 0])}`,
            fontFamily: fonts[fontNum]
        }
    }
    return (
        <div style={styles.container} >
            <Img style={styles.background} src={staticFile('hbd/bg.jpg')} />
            <Audio src={staticFile('hbd/music.mp3')} />
            <Img src={staticFile('hbd/balloons/1.png')} style={balloonStyle(false, 28, { frames: [10, 70], magnitude: [100, -100] }, 10)} />
            <Img src={staticFile('hbd/balloons/2.png')} style={balloonStyle(false, -12, { frames: [0, 50], magnitude: [100, -100] }, 7)} />
            <Img src={staticFile('hbd/balloons/2.png')} style={balloonStyle(true, 73, { frames: [0, 50], magnitude: [100, -100] }, 7)} />
            <Img src={staticFile('hbd/balloons/3.png')} style={balloonStyle(false, 9, { frames: [0, 30], magnitude: [100, -100] }, 2)} />
            <Img src={staticFile('hbd/balloons/3.png')} style={balloonStyle(false, 66, { frames: [0, 30], magnitude: [100, -100] }, 2)} />
            <Img src={staticFile('hbd/g7.png')} style={giuImage()} />
            <p style={text([0, 70, 95, 140, 165], 4)} >Happy Birthday, my love!</p>
            <p style={text([0, 165, 190, 235, 260], 1)} >You make my world brighter every day</p>
            <p style={text([0, 260, 285, 330, 355], 0)} >I’m so lucky to have you in my life</p>
            <p style={text([0, 355, 380, 425, 450], 3)} >Wishing you endless joy and love today!</p>
            <p style={text([0, 450, 475, 520, 545], 2)} >No distance can change how much I love you</p>
            <Img src={staticFile('hbd/confetti.png')} style={balloonStyle(false, 28, { frames: [560, 630], magnitude: [-100, 100] }, 570)} />
            <Img src={staticFile('hbd/confetti.png')} style={balloonStyle(false, 12, { frames: [580, 620], magnitude: [-100, 100] }, 570)} />
            <Img src={staticFile('hbd/confetti.png')} style={balloonStyle(false, 35, { frames: [570, 620], magnitude: [-100, 100] }, 570)} />
            <Img src={staticFile('hbd/confetti.png')} style={balloonStyle(false, 28, { frames: [560, 630], magnitude: [-100, 100] }, 570)} />
            <Img src={staticFile('hbd/confetti.png')} style={balloonStyle(false, 1, { frames: [580, 620], magnitude: [-100, 100] }, 570)} />
            <Img src={staticFile('hbd/confetti.png')} style={balloonStyle(false, 55, { frames: [580, 620], magnitude: [-100, 100] }, 570)} />
            <Img src={staticFile('hbd/cake.png')} style={styles.cake} />
            <Img src={staticFile('hbd/crown.png')} style={styles.crown} />
        </div>
    )
}
export default HappyBirthday

type Styles = 'container' | 'background' | 'balloon' | 'flip' | 'main' | 'text' | 'cake' | 'crown'