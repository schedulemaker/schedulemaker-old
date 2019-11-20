/**
 *
 * @param {Object} params : an Object containing the following keys:
 *                           * availableTags: a list of available chips.
 *                           * inputTag: the ID the input element.
 *                           * chipsDiv : the ID of the chips div tag.
 */
function Chips(params) {
    var Chips = {};

    var selected = [];
    var availableTags = params.availableTags || [];

    $(function() {
        $(`#${params.inputTag}`).autocomplete({
            source: availableTags,
            select: function(event, ui) {
                var value = ui.item.value;
                selected.push(value);
                refreshDiv();
                var i = availableTags.indexOf(value);
                availableTags.splice(i, 1);
                event.preventDefault();
                $(`#${params.inputTag}`).focusout();
                $(`#${params.inputTag}`).val('');
            }
        });
    });
      
    function refreshDiv(){
        $(`#${params.inputTag}`).val(selected.join(','));
        $(`#${params.chipsDiv}`).empty();
        for(let selectedTag of selected) {
            $(`#${params.chipsDiv}`).append(
                $(
                    `<span class="btn btn-cherry" style="margin:3px;">
                        ${selectedTag}&nbsp;&nbsp; 
                    </span>`
                ).append(
                    $(`
                        <span>
                            X
                        </span>`
                    ).on('click', function() {
                        availableTags.push(selectedTag);
                        var i = selected.indexOf(selectedTag);
                        selected.splice(i, 1);
                        refreshDiv();
                    })
                )
            );
        }
    }

    Chips.getSelected = () => {
        return selected;
    }

    return Chips;
}