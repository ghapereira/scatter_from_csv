/** Do the scatter plot
 * Method cited at:
 * https://groups.google.com/forum/#!msg/paperjs/C6F0XFlplqM/_67AMqCR_nAJ
 */

window.globals = {
  disciplineList: [],
  obstructionList: [],
  HORIZONTAL_SIZE: 500,
  VERTICAL_SIZE: 500,
  MARGIN_PLOT_BOTTOM: 10,
  MARGIN_PLOT_LEFT: 10,
  initScatterPanel: function(){
    view.viewSize = new Size(globals.HORIZONTAL_SIZE, globals.VERTICAL_SIZE);

    if(globals.disciplineList.length !== globals.obstructionList.length){
      alert("Error on size of the attributes!");
    }

    for(var i = 0; i < globals.disciplineList.length; i++){
      /* Group that contains the dot and provides an environment for it(tooltip,
        for example */
      var group = new Group();

      // Point coordinates
      x = globals.disciplineList[i];
      y = globals.obstructionList[i];

      dot = new Path.Circle({
        center: [globals.HORIZONTAL_SIZE - (x * 400) + globals.MARGIN_PLOT_LEFT,
                 globals.VERTICAL_SIZE - (y * 500) - globals.MARGIN_PLOT_BOTTOM],
        radius: 5,
        fillColor: 'blue',
        opacity: 0.5
      });

      group.addChild(dot);

      // Create onMouseEnter event for dot
      dot.onMouseEnter = function(event) {
        /*
        // Layout the tooltip above the dot
        var tooltipRect = new Rectangle(this.position + new Point(-20, -40));
        // Create tooltip from rectangle
        var tooltip = new Path.Rectangle(tooltipRect);
        tooltip.fillColor = 'white';
        tooltip.strokeColor = 'black';
        // Name the tooltip for retrieving
        tooltip.name = 'tooltip';
        // Add the tooltip to parent (group)
        this.parent.addChild(tooltip);
        */
        this.fillColor = 'red';
        this.opacity = 1;
      }

      // Create onMouseLeave envent for dot
      dot.onMouseLeave = function(event) {
        // Retrieve the tooltip from its name in the parent node (group) to remove it
        // this.parent.children['tooltip'].remove();
        this.fillColor = 'blue';
        this.opacity = 0.5;
      }
    }

/*    new Path.Circle({
        center: [10, 10],
        radius: 10,
        fillColor: 'black',
        opacity: 0.8
    });*/

    // Refresh
    view.update();
  }
};

window.addEventListener('ProcessedScatterData', globals.initScatterPanel, false);
