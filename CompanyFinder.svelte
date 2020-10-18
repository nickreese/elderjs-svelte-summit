<script>
    import AutoComplete from 'simple-svelte-autocomplete'
    export let companies;
    let selected;

    $: {
        if (selected && selected.FID) {
            window.location.href = `/${selected.FID}/`;
        }
    }
</script>

<AutoComplete items={companies} bind:selectedItem={selected} labelFieldName="NAME" />
