$( document ).ready( initialize );

function initialize() {
    $( '.ui.modal' ).modal();

    $( '#test' ).click( function() {
        $( '#modal' ).modal( 'show' );
    });
}
