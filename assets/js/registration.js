jQuery(function() {
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateName(name) {
        return name.length > 5;
    }

    function validateGithub(github) {
        return github.length === 0 || github.indexOf("github.com/") !== -1;
    }

    $("#reg-form").submit(function(event) {
        var values = {};
        $('#reg-form :input').each(function() {
            values[this.name] = $(this).val();
        });

        var hasValidationErrors = false;
        if (!validateName(values.name)) {
            $("#reg-form input[name=name]").val("").addClass('red-placeholder').attr("placeholder", "Name must be longer than 6 characters!");
            hasValidationErrors = true;
        }

        if (!validateEmail(values.email)) {
            $("#reg-form input[name=email]").val("").addClass('red-placeholder').attr("placeholder", "Invalid email!");
            hasValidationErrors = true;
        }

        if (!validateGithub(values.github)) {
            $("#reg-form input[name=github]").val("").addClass('red-placeholder').attr("placeholder", "Invalid github!");
            hasValidationErrors = true;
        }

        if (!hasValidationErrors) {
            $.post("https://hooks.slack.com/services/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", JSON.stringify({text: values.name + " - " + values.email + " - " + values.github}));
        }
    });
});