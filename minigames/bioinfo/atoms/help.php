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
<br />
<p>Click on <span style="padding:10px;text-decoration: none;text-transform: uppercase;font-family: Arial, Helvetica, sans-serif;font-size: 14px;font-weight: normal;color: #FFFFFF;background-color:black;">[ L e v e l # <?php echo $level;?> &mdash; g a m e # <?php echo $gameIndex;?> ]</span> to return to the mini-game </p>
<br />

<br />

<p style="font-size: 150%">The clue is in the URL &#9786;</p>
</center>

<details>
<summary>Hint</summary>
<table>
<thead>
<tr>
<th>Amino Acid Name</th>
<th>3-Letter Code</th>
<th>1-Letter Code</th>
<th>List of Atoms</th>
</tr>
</thead>
<tbody>
<tr>
<td>Alanine</td>
<td>ALA</td>
<td>A</td>
<td>N, CA, C, O, CB</td>
</tr>
<tr>
<td>Arginine</td>
<td>ARG</td>
<td>R</td>
<td>N, CA, C, O, CB, CG, CD, NE, CZ, NH1, NH2</td>
</tr>
<tr>
<td>Asparagine</td>
<td>ASN</td>
<td>N</td>
<td>N, CA, C, O, CB, CG, OD1, ND2</td>
</tr>
<tr>
<td>Aspartic Acid</td>
<td>ASP</td>
<td>D</td>
<td>N, CA, C, O, CB, CG, OD1, OD2</td>
</tr>
<tr>
<td>Cysteine</td>
<td>CYS</td>
<td>C</td>
<td>N, CA, C, O, CB, SG</td>
</tr>
<tr>
<td>Glutamic Acid</td>
<td>GLU</td>
<td>E</td>
<td>N, CA, C, O, CB, CG, CD, OE1, OE2</td>
</tr>
<tr>
<td>Glutamine</td>
<td>GLN</td>
<td>Q</td>
<td>N, CA, C, O, CB, CG, CD, OE1, NE2</td>
</tr>
<tr>
<td>Glycine</td>
<td>GLY</td>
<td>G</td>
<td>N, CA, C, O</td>
</tr>
<tr>
<td>Histidine</td>
<td>HIS</td>
<td>H</td>
<td>N, CA, C, O, CB, CG, ND1, CD2, CE1, NE2</td>
</tr>
<tr>
<td>Isoleucine</td>
<td>ILE</td>
<td>I</td>
<td>N, CA, C, O, CB, CG1, CG2, CD1</td>
</tr>
<tr>
<td>Leucine</td>
<td>LEU</td>
<td>L</td>
<td>N, CA, C, O, CB, CG, CD1, CD2</td>
</tr>
<tr>
<td>Lysine</td>
<td>LYS</td>
<td>K</td>
<td>N, CA, C, O, CB, CG, CD, CE, NZ</td>
</tr>
<tr>
<td>Methionine</td>
<td>MET</td>
<td>M</td>
<td>N, CA, C, O, CB, CG, SD, CE</td>
</tr>
<tr>
<td>Phenylalanine</td>
<td>PHE</td>
<td>F</td>
<td>N, CA, C, O, CB, CG, CD1, CD2, CE1, CE2, CZ</td>
</tr>
<tr>
<td>Proline</td>
<td>PRO</td>
<td>P</td>
<td>N, CA, C, O, CB, CG, CD</td>
</tr>
<tr>
<td>Serine</td>
<td>SER</td>
<td>S</td>
<td>N, CA, C, O, CB, OG</td>
</tr>
<tr>
<td>Threonine</td>
<td>THR</td>
<td>T</td>
<td>N, CA, C, O, CB, OG1, CG2</td>
</tr>
<tr>
<td>Tryptophan</td>
<td>TRP</td>
<td>W</td>
<td>N, CA, C, O, CB, CG, CD1, CD2, NE1, CE2, CE3, CZ2, CZ3, CH2</td>
</tr>
<tr>
<td>Tyrosine</td>
<td>TYR</td>
<td>Y</td>
<td>N, CA, C, O, CB, CG, CD1, CD2, CE1, CE2, CZ, OH</td>
</tr>
<tr>
<td>Valine</td>
<td>VAL</td>
<td>V</td>
<td>N, CA, C, O, CB, CG1, CG2</td>
</tr>
</tbody>
</table>
</details>
</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
