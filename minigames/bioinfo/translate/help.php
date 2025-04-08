<?php
session_start();
$_SESSION['aide']=1;
?>

<?php
	include('../../phpCrazy/header_help.inc.php');
?>


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
<center>
<p style="font-size: 150%">The clue is in the URL &#9786;</p>
<br />
<br />
<p>Click on <span style="padding:10px;text-decoration: none;text-transform: uppercase;font-family: Arial, Helvetica, sans-serif;font-size: 14px;font-weight: normal;color: #FFFFFF;background-color:black;">[ L e v e l # <?php echo $level;?> &mdash; g a m e # <?php echo $gameIndex;?> ]</span> to return to the mini-game </p>
</center>

<h3>EMBOSS<sup title="Easy">★☆☆</sup></h3>

<p>No specific clue. Just use the right EMBOSS App!!</p>

<h3>Python<sup title="Easy">★★☆</sup></h3>

<details>
<summary>Hint</summary>

<p>Implement..</p>
<ul>
<li> a function <em>translate(nucl_seq,frame=0)</em> </li>
<li> a function <em>complement(nucl_seq)</em></li>
</ul> 

<p>Finally, implement a function <em>sixframes(nucl_seq)</em> combining the previous functions to translate along the six frames like the EMBOSS app.</p>
</details>
<br/>
<details>
<summary>Data</summary>
The codon table as a <em>Dictionary</em>
<pre>
table = { 
    'ATA':'I', 'ATC':'I', 'ATT':'I', 'ATG':'M', 
    'ACA':'T', 'ACC':'T', 'ACG':'T', 'ACT':'T', 
    'AAC':'N', 'AAT':'N', 'AAA':'K', 'AAG':'K', 
    'AGC':'S', 'AGT':'S', 'AGA':'R', 'AGG':'R',                  
    'CTA':'L', 'CTC':'L', 'CTG':'L', 'CTT':'L', 
    'CCA':'P', 'CCC':'P', 'CCG':'P', 'CCT':'P', 
    'CAC':'H', 'CAT':'H', 'CAA':'Q', 'CAG':'Q', 
    'CGA':'R', 'CGC':'R', 'CGG':'R', 'CGT':'R', 
    'GTA':'V', 'GTC':'V', 'GTG':'V', 'GTT':'V', 
    'GCA':'A', 'GCC':'A', 'GCG':'A', 'GCT':'A', 
    'GAC':'D', 'GAT':'D', 'GAA':'E', 'GAG':'E', 
    'GGA':'G', 'GGC':'G', 'GGG':'G', 'GGT':'G', 
    'TCA':'S', 'TCC':'S', 'TCG':'S', 'TCT':'S', 
    'TTC':'F', 'TTT':'F', 'TTA':'L', 'TTG':'L', 
    'TAC':'Y', 'TAT':'Y', 'TAA':'_', 'TAG':'_', 
    'TGC':'C', 'TGT':'C', 'TGA':'_', 'TGG':'W', 
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
