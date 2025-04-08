// import * as DOM from '../../js/dom.js';

function process(e) {
    const base = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
    // Get Databank
    let bdd = document.getElementById('database').value;
    // Get request
    let query = document.getElementById('request').value;
    // Fetch data + summary
    let url=`${base}/esearch.fcgi?db=${bdd}&term=${query}` // &retmode=json
    fetch(url)
        .then(response => response.text())
        .then(xml_string => {
            console.info(xml_string);
            const parser = new DOMParser();
            const xml_doc = parser.parseFromString(xml_string, "application/xml");
            let result = document.getElementById('results');
            let count = xml_doc.querySelector('Count').textContent;
            document.getElementById('count').innerHTML = `Items: 1 to 20 of ${count}`;
            // Fetch summary
            let a = [...xml_doc.querySelectorAll('Id')];
            id_list = a.map(id => id.textContent);
            let url=`${base}/esummary.fcgi?db=${bdd}&id=${id_list.join(',')}`;
            fetch(url)
            .then(response => response.text())
            .then(xml_string => {
                const parser = new DOMParser();
                const xml_doc = parser.parseFromString(xml_string, "application/xml");
                title_list = xml_doc.querySelectorAll('Item[Name=Title]');
                acc_list = xml_doc.querySelectorAll('Item[Name=AccessionVersion]');
                gi_list = xml_doc.querySelectorAll('Item[Name=Gi]');
                len_list = xml_doc.querySelectorAll('Item[Name=Length]');
                document.getElementById('node_list').innerHTML = '';
                for (i in [...Array(20).keys()]) {
                    document.getElementById('node_list').innerHTML += 
                        `<li>${title_list[i].textContent}<p>Length:${len_list[i].textContent} </p><p>Accession: ${acc_list[i].textContent} GI:${id_list[i]}</p></li>`;
                }
            });
        });

}

function process_fasta(id_list) {
    const base = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
    // Get Databank
    let bdd = document.getElementById('database').value;
    // Fetch data
    let url=`${base}/efetch.fcgi?db=${bdd}&id=${id_list}&rettype=fasta&retmode=text` // &retmode=json
        fetch(url)
        .then(response => response.text())
        .then(fastas => {
            console.log(fastas);
//            for (i in [...Array(20).keys()]) {
//                document.getElementById('node_list').innerHTML += 
//                    `<li>${title_list[i].textContent}<p>Length:${len_list[i].textContent} </p><p>Accession: ${acc_list[i].textContent} GI:${id_list[i]}</p></li>`;
//            }
        });

}
