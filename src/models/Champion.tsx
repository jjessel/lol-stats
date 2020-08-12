import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Champion')
export class Champion {
    @JsonProperty('name', String)
    name = '';
}
