<script>
  export let data, helpers,  request, settings;


</script>


<a href="/">&LeftArrow; Home</a>

<h1>{data.company.NAME}</h1>

<ul>
  {#each Object.entries(data.company) as entry}
    <li>{entry[0]}: {entry[1]}</li>
  {/each}
</ul>
