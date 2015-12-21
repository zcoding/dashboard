(($) => {

  function tagsinput(options) {
    return this.each((index, ele) => {

      var $holder = this.children('.holder');
      var $input = $holder.children('input');
      var $calculator = this.children('.calculate-holder');
      const parentWidth = this.innerWidth();
      const minWidth = 64;

      var $this = this;

      function updateWidth() {
        $calculator.text($input.val());
        var width = $calculator.width();
        $holder.width(width + 2);
      }

      function handleClick(evt) {
        updateWidth();
        if (evt.target !== evt.currentTarget) {
          $input.focus();
        } else {
          var offsetX = evt.offsetX;
          var $children = $this.children('.label');
          var before = false;
          for (var i = 0; i < $children.length; ++i) {
            if ($children.eq(i).position().left > offsetX) {
              before = true;
              $children.eq(i).before($holder);
              break;
            }
          }
          if (!before) {
            $children.eq($children.length - 1).after($holder);
          }
          $input.focus();
        }
      }
      function handleKeydown(evt) {
        switch(evt.which) {
          case 13: // enter
            var newTagText = $input.val().replace(/^\s+|\s+$/g, '');
            if (newTagText !== '') {
              var $newTag = $(`<span class="label label-dark">${newTagText}</span>`);
              $holder.before($newTag);
              $input.val('').focus();
              updateWidth();
            }
            evt.preventDefault();
            break;
          case 8: // backspace
            if ($input.val() === '') {
              var deleteLabelIndex = $holder.index() - 1;
              if (deleteLabelIndex >= 0) {
                $this.children('span').eq(deleteLabelIndex).remove();
              }
            } else {
              updateWidth();
            }
            break;
          case 37: // left
            if ($input.val() === '') {
              var holderIndex = $holder.index();
              if (holderIndex > 0) {
                $holder.width(2);
                $this.children('span').eq(holderIndex - 1).before($holder);
                $input.focus();
              }
            }
            break;
          case 39: // right
            if ($input.val() === '') {
              var holderIndex = $holder.index();
              if (holderIndex < $this.children().length - 1) {
                $holder.width(2);
                $this.children('span').eq(holderIndex + 1).after($holder);
                $input.focus();
              }
            }
            break;
          default:
            console.log(evt.which);
        }
      }
      function handleKeyup() {
        updateWidth();
      }
      this.on('click.tagsinput.db', handleClick);
      this.on('keydown.tagsinput.db', handleKeydown);
      this.on('input.tagsinput.db', handleKeyup);
    });
  }

  $.fn.extend({ tagsinput });

})(jQuery);
