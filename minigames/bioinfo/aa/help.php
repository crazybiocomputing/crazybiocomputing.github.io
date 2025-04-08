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
<p>Click on <span style="padding:10px;text-decoration: none;text-transform: uppercase;font-family: Arial, Helvetica, sans-serif;font-size: 14px;font-weight: normal;color: #FFFFFF;background-color:black;">[ L e v e l # <?php echo $level;?> &mdash; g a m e # <?php echo $gameIndex;?> ]</span> to return to the mini-game </p>

<p style="font-size: 120%">The clue is in the URL ... and don't forget to add the extension <i>'.php'</i> &#9786;</p>
</center>
<br />
<h3>EMBOSS<sup title="Easy">★☆☆</sup></h3>
<table style="font-size: 150%">
<tr><td>A<sup>2</sup></td><td>B<sup>8</sup></td><td>C<sup>17</sup></td><td>D<sup>23</sup></td><td>E<sup>12</sup></td><td>F<sup>20</sup></td></tr>
<tr><td>G<sup>6</sup></td><td>H<sup>19</sup></td><td>I<sup>15</sup></td><td>J<sup>21</sup></td><td>K<sup>4</sup></td><td>L<sup>11</sup></td></tr>
<tr><td>M<sup>14</sup></td><td>N<sup>22</sup></td><td>O<sup>3</sup></td><td>P<sup>16</sup></td><td>Q<sup>10</sup></td><td>R<sup>5</sup></td></tr>
<tr><td>S<sup>24</sup></td><td>T<sup>9</sup></td><td>U<sup>18</sup></td><td>V<sup>7</sup></td><td>W<sup>13</sup></td><td>X<sup>31</sup></td></tr>
</table>
<br />
<h3>Python<sup title="Easy">★☆☆</sup></h3>
<details>
<summary>Hint</summary>
<pre>code = '..AOKRGVBTQLEWMIPCUHFJNDS......X'</pre>
</details>
<br />




</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
