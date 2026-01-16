export class AudioManager {
    constructor(game, sceneManager, assetManager) {
        this.game = game;
        this.sceneManager = sceneManager;
        this.assetManager = assetManager;
        this.musicPlaying = new Map();
        this.pausedMusic = new Map();
    }

    play(key) {
        if(!this.assetManager.exist(key)) {
            console.log("The audio has not been loaded yet.");
            return;
        }

        const scene = this.sceneManager.getCurrentScene();
        if(scene == null) {
            return;
        }

        if(this.isPlaying(key)) {
            this.stop(key);
        }

        const audioCache = scene.cache.json.get("audio-json");
        let data = {};

        if(audioCache != null) {
            const audioData = audioCache[key];
            if(audioData != null)  {
                for(const [key, value] of Object.entries(audioData)) {
                    data[key] = value;
                }
            } else {
                console.log(`Audio key ${key} was not found in the audio cachce. Data will be default`);
            }
        } else {
            console.log(`Audio cache was not found. Audio data for ${key} will be default`);
        }

        const audio = scene.sound.add(key, data);
        if(audio === null) {
            console.log("Failed to add audio key " + key);
            return;
        }

        audio.play();
        this.musicPlaying.set(key, audio);

        // auto remove after completed
        audio.once("complete", () => {
            this.stop(key);
        });
    }

    stop(key) {
        if(!this.isPlaying(key)) {
            return;
        }

        const audio = this.get(key);
        if(audio === null) {
            return;
        }

        audio.stop();
        this.musicPlaying.delete(key);
    }

    get(key) {
        if(!this.musicPlaying.has(key)) {
            return;
        }

        return this.musicPlaying.get(key);
    }

    pause(key) {
        if(!this.isPlaying(key)) {
            return;
        }

        const audio = this.get(key);
        if(audio === null) {
            return;
        }

        audio.pause();
        this.musicPlaying.delete(key);
        this.pausedMusic.set(key, audio);
    }

    resume(key) {
        if(!this.isPlaying(key)) {
            return;
        }

        const audio = this.get(key);
        if(audio === null) {
            return;
        }

        audio.resume();
        this.musicPlaying.set(key, audio);
        this.pausedMusic.delete(key);
    }

    stopAllMusic() {
        this.musicPlaying.clear();
        this.pausedMusic.clear();
    }

    isPlaying(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.isPlaying && this.musicPlaying.has(key);
    }

    isPaused(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.isPaused;
    }

    getVolume(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.volume;
    }

    setVolume(key, volume) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        audio.setVolume(volume);
    }

    getMuted(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.mute;
    }

    setMuted(key, mute) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        audio.setMute(mute);
    }

    getLoop(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.loop;
    }

    setLoop(key, loop) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        audio.setLoop(loop);
    }

    getRate(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.rate;
    }

    setRate(key, rate) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        audio.setRate(rate);
    }

    getDetune(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.detune;
    }

    setDetune(key, detune) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        audio.setDetune(detune);
    }

    getSeek(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.seek;
    }

    setSeek(key, seek) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        audio.setSeek(seek);
    }

    getDelay(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.delay;
    }

    setDelay(key, delay) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        audio.setDelay(delay);
    }

    getDuration(key) {
        const audio = this.get(key);
        if(audio == null) {
            return;
        }

        return audio.duration;
    }
}