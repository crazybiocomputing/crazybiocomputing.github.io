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

<h3>EMBOSS<sup title="Easy">★☆☆</sup></h3>

<p> Find out an application that counts or matches words of given size</p>

<details>
<summary>Hint</summary>
<p class="hint"> <code>wordcount</code> is perfect for that!!</p>
</details>
<br/>
<details>
<summary>Hint</summary>
<p class="hint"> Another solution is to use <code>wordmatch</code>.</p>
</details>
<br/>


<h3>Python<sup title="Super Easy">★☆☆</sup></h3>

<p>These <em>String</em> methods may be useful (by alphabetical order): </p>
<table>
<thead>
<tr>
<td>Method Name</td>
<td>Python Docs</td>
</tr>
</thead>
<tbody>
  <tr><td>count(..)</td><td> <a href="https://docs.python.org/3/library/stdtypes.html#str.count">Link</a></td></tr>
  <tr><td>join(..)</td><td> <a href="https://docs.python.org/3/library/stdtypes.html#str.join">Link</a></td></tr>
  <tr><td>replace(..)</td><td> <a href="https://docs.python.org/3/library/stdtypes.html#str.replace">Link</a></td></tr>
  <tr><td>split(..)</td><td> <a href="https://docs.python.org/3/library/stdtypes.html#str.split">Link</a></td></tr>
</tbody>
</table>

<br/>


<h3>Levels</h3>
<ul>
<li>☆☆☆: Super Easy</li>
<li>★☆☆: Easy</li>
<li>★★☆: Intermediate</li>
<li>★★★: Expert</li>
</ul>

</div>
</div>

<center>
Python

EMBOSS

</center>
</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
