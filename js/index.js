function readTextFileRes(file)
{
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                let allText = rawFile.responseText;
                JSC.Chart('chartDivResults',{
                    // type: "vertical column",
                    series: JSON.parse(rawFile.responseText)['series']
                });
            }
        }
    }
    rawFile.send(null);
}

function readTextFileTms(file)
{
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                let allText = rawFile.responseText;
                JSC.Chart('chartDivTimes',{
                    // type: "vertical column",
                    series: JSON.parse(rawFile.responseText)['series']
                });
            }
        }
    }
    rawFile.send(null);
}

function readTextFileAcclrtn(file)
{
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                let allText = rawFile.responseText;
                JSC.Chart('chartDivAccelrtns',{
                    // type: "vertical column",
                    series: JSON.parse(rawFile.responseText)['series']
                });
            }
        }
    }
    rawFile.send(null);
}
readTextFileRes("src/res.json")
readTextFileTms("src/times.json")
readTextFileAcclrtn("src/accel.json")

