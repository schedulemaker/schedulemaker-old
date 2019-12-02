/*jshint esversion: 8*/
/*jshint -W083*/

/**
 *
 * @param {Object} params : an Object containing the following keys:
 *                           * availableTags: an object of available chips.
 *                           * inputTag: the ID the input element.
 *                           * chipsDiv : the ID of the chips div tag.
 */
function Chips(params) {
    var Chips = {};

    var selected = [];
    var availableTags = params.availableTags || {};

    $(function() {
        $(`#${params.inputTag}`).autocomplete({
            source: function(request, response) {
                let results = $.ui.autocomplete.filter(Object.keys(availableTags), request.term);

                // Place results that start with request.term before results that do not.
                let startsWithResults = [];
                let notStartsWithResults = [];
                for(let result of results) {
                    if(!selected.includes(result)) {
                        if(result.startsWith(request.term)) {
                            startsWithResults.push(result);
                        } else {
                            notStartsWithResults.push(result);
                        }
                    }
                }
                startsWithResults.sort();
                notStartsWithResults.sort();
                results = startsWithResults.concat(notStartsWithResults);

                // List only the first 10 results.
                response(results.slice(0, 10));
            },
            select: function(event, ui) {
                var value = ui.item.value;
                selected.push(value);
                refreshDiv();
                event.preventDefault();
                $(`#${params.inputTag}`).focusout();
                $(`#${params.inputTag}`).val('');
            }
        });
    });
      
    function refreshDiv(){
        $(`#${params.inputTag}`).val();
        $(`#${params.chipsDiv}`).empty();
        for(let selectedTag of selected) {
            let selectedName = selectedTag.split(':')[0];
            let selectedTitle = selectedTag.split(':')[1];
            let newChip = $(
            `<span class="btn btn-cherry" style="margin:3px;" data-toggle="tooltip" data-placement="bottom" title="${selectedTitle}">
                ${selectedName}&nbsp;&nbsp; 
            </span>`
            ).append(
                $(`
                    <span>
                        X
                    </span>`
                ).on('click', function() {
                    var i = selected.indexOf(selectedTag);
                    selected.splice(i, 1);
                    refreshDiv();
                })
            );
            $(`#${params.chipsDiv}`).append(newChip);
        }
    }

    Chips.getSelected = () => {
        return selected.map(e => e.split(':')[0]);
    }

    return Chips;
}
