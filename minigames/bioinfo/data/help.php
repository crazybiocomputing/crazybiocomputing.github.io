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

</style>


<div id="page">
<div id="content">

<p>Explore the appropriate NCBI databank to solve this mini-game. Do not forget to add the extension <em>php</em> to the secret word!!</p>

<h3>Difficulty<sup title="Intermediate">★★☆</sup></h3>

<p> <em>Display Settings</em> is the key!!</p>

<details>
<summary>Hint</summary>
<p class="hint"> In NCBI, choose the databank Taxonomy</p>
</details>
<br/>
<details>
<summary>Hint</summary>
<p class="hint"> Build your request by using logical operator <strong>OR</strong></p>
</details>
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


<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
