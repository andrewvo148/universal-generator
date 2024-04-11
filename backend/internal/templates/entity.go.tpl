import java.util.List;
import java.util.ArrayList;

public class {{ .Name }} {
{{ range .Fields }}    private {{ .Type }} {{ .Name }};
{{ end }}

    // Constructor
    public {{ .Name }}() {
    }

    // Getters and setters
{{ range .Fields }}    public {{ .Type }} get{{ .Name | title }}() {
        return {{ .Name }};
    }

    public void set{{ .Name | title }}({{ .Type }} {{ .Name }}) {
        this.{{ .Name }} = {{ .Name }};
    }
{{ end }}

    // toString method
    @Override
    public String toString() {
        return "{{ .Name }}{" +
{{ range .Fields }}            "{{ .Name }}=" + {{ .Name }} +
{{ end }}            '}';
    }
}`