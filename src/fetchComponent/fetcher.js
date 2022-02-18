import { useState, useEffect } from "react"

function Fetcher() {
    const [text, setText] = useState('') 

    useEffect(() => {
        const fetchText = async () => {
            const response = await fetch('https://prod-18.australiaeast.logic.azure.com:443/workflows/45db07679c8240f7896db0d735662967/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wbTW6lcxzyokcShJGOFyy18YwwIcPuU7WM_5DeTVcEQ');
            const responseText = await response.text();
            
            setText(responseText);
        };

        fetchText();
    }, [])

    return (
        <div>
            {text}
        </div>
    );
}

export default Fetcher