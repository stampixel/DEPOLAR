import {useEffect, useState} from "react";
import {createWorker} from "tesseract.js";

export default function useImage() {
    const [ocr, setOcr] = useState("");
    const [imageData, setImageData] = useState("");
    const worker = createWorker({
        logger: (m) => {
            console.log(m);
        },
    });
    const convertImageToText = async () => {
        if (!imageData) return;
        await (await worker).load();
        await (await worker).loadLanguage("eng");
        await (await worker).initialize("eng");
        const {
            data: {text},
        } = await (await worker).recognize(imageData);
        setOcr(text);
        console.log("asdasds");
    };

    useEffect(() => {
        convertImageToText();
    }, [imageData]);

    async function handleImageChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUri = reader.result;
            console.log({imageDataUri});
            setImageData(imageDataUri);
        };
        reader.readAsDataURL(file);
    }

    return {
        handleImageChange,
        ocr,
        imageData
    };
}

