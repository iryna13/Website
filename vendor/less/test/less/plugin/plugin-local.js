functions.addMultiple({
    "test-shadow" : function() {
        return new tree.Anonymous( "local" );
    },
    "test-local" : function() {
        return new tree.Anonymous( "local" );
    }
});

return {
    setOptions: function(raw) {
        // do nothing
    }
}