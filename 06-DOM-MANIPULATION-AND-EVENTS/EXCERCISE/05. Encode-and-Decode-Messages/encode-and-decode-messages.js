document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let encodeValue = document.getElementById('encode')
    let textArea = encodeValue.querySelector('textarea')
    let encodeBtn = encodeValue.querySelector('button')
    encodeBtn.addEventListener('click', encode)

    function encode(event){
        event.preventDefault()

        let msg = textArea.value
        let decodeMsg = '';

        for (let char of msg){
            let currentChar = char.charCodeAt(0) + 1
            decodeMsg += String.fromCharCode(currentChar)
        }

        textArea.value = '';

        let decodeValue = document.getElementById('decode');
        let textAreaDecode = decodeValue.querySelector('textarea');
        textAreaDecode.textContent = decodeMsg;

        let decodeBtn = decodeValue.querySelector('button')
        decodeBtn.addEventListener('click', decode)

        let encodedMsg = '';

        function decode (event){
            event.preventDefault()

            for (let char of decodeMsg){
                let currentChar = char.charCodeAt(0) - 1
                encodedMsg += String.fromCharCode(currentChar)
                textAreaDecode.textContent = encodedMsg;
            }
        }
    }
}