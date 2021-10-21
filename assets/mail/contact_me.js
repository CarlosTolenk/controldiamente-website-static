$(function () {
    $(
        "#contactForm input,#contactForm textarea,#contactForm button"
    ).jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(" ") >= 0) {
                firstName = name.split(" ").slice(0, -1).join(" ");
            }
            const data = {firstName, subject, message}

            $this = $("#sendMessageButton");
            console.group('Enviando mensaje');
            console.log('Capturando datos');
            console.log(data);
            console.groupEnd();
            const phone = '18493596224';
            const messageComplete = `Mi nombre es ${firstName}, me estoy contactando desde su website por el motivo de: ${subject}. ${message}`;
            const url = `https://api.whatsapp.com/send?phone=${phone}&text=${messageComplete}`;

            window.open(url, '_blank');

        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $("#success").html("");
});
