<?php
	include('../../phpCrazy/header_help.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>

<style>
body {
    font-family: system-ui, sans-serif
}

h3 {
    font-family:Oswald;
    color: #007cbb;
    font-size: 1.5em
}

p {
    font-size: 1.2em;
}

.hint {
    color: white; 
    background: #30353b; 
    padding: 1em; 
    border-radius: 5px;
}

code {
    border: solid #eee 1px;
    border-radius: 4px;
    padding: 2px 4px;
    background-color: #444;
}

details {
    padding: 10px; 
    background-color: #e4eaef;
    border-radius: 3px;
}

details code {
    font-size: 1.1em;
}

    /* Light theme. */
    :root {
      --color-canvas-default: #ffffff;
      --color-canvas-subtle: #f6f8fa;
      --color-border-default: #d0d7de;
      --color-border-muted: hsla(210, 18%, 87%, 1);
    }

    /* Dark theme. */
    @media (prefers-color-scheme: dark) {
      :root {
        --color-canvas-default: #0d1117;
        --color-canvas-subtle: #161b22;
        --color-border-default: #30363d;
        --color-border-muted: #21262d;
      }
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
      display: block;
      margin-top: 0;
      margin-bottom: 16px;
      width: max-content;
      max-width: 100%;
      overflow: auto;
    }

    tr {
      background-color: var(--color-canvas-default);
      border-top: 1px solid var(--color-border-muted);
    }

    tr:nth-child(2n) {
      background-color: var(--color-canvas-subtle);
    }

    td,
    th {
      padding: 6px 13px;
      border: 1px solid var(--color-border-default);
    }

    th {
      font-weight: 600;
    }
</style>

<div id="page">
<div id="content">
<br />
<br />
<h3>EMBOSS<sup title="Easy">★☆☆</sup></h3>
<center>
<a title="TungstenEinsteinium, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:ProteinogenicAminoAcids.svg"><img width="512" alt="Twenty-one proteinogenic α-amino acids" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ProteinogenicAminoAcids.svg/512px-ProteinogenicAminoAcids.svg.png?20240501000031"></a></center>

<h3>Python<sup title="Easy">★☆☆</sup></h3>
<details>
  <summary>Algorithm</summary>
  Protein Mw is calculated by the addition of average isotopic masses of amino acids in the protein and the average isotopic mass of one water molecule. Molecular weight values are given in Dalton (Da). (Source: https://web.expasy.org/compute_pi/pi_tool-doc.html)
</details>
<br/>

<details>
  <summary>Data</summary>
<pre>
AMINO_ACID_WEIGHTS = {
    'A': 71.0788 , 
    'R': 156.1875 , 
    'N': 114.1038 , 
    'D': 115.0886 , 
    'C': 103.1388 , 
    'E': 129.1155 , 
    'Q': 128.1307 , 
    'G': 57.0519 , 
    'H': 137.1411 , 
    'I': 113.1594 , 
    'L': 113.1594 , 
    'K': 128.1741 , 
    'M': 131.1926 , 
    'F': 147.1766 , 
    'P': 97.1167 , 
    'S': 87.0782 , 
    'T': 101.1051 , 
    'W': 186.2132 , 
    'Y': 163.1760 , 
    'V': 99.1326 , 
    'U': 150.0388 , 
    'O': 237.3018 
}
</pre>
</details>
</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
