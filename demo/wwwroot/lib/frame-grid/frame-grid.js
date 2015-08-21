/**
 * Created by amir on 8/13/2015.
 */

(function(){

    angular.module('aha.ng.directives',[])
        .directive('frameGrid',frameGrid);

    function frameGrid() {

        return{
            scope: {
                model: '='
            },
            restrict: 'E',
            link: function (scope, element, attrs) {

                var showGrid = scope.$eval(attrs.showGrid);
                scope.$watch('modifiedDate',function(newValue, oldValue){
                    if(showGrid)
                        scope.renderGrid(element);
                    else
                        scope.renderFrame(element);
                });

                jQuery(document).on('keypress', function(e){
                    scope.$apply(scope.navigate(e));
                });
            },

            controller: function($scope,$element,$attrs) {

                var sortBy = $attrs.sortBy;
                if(sortBy){
                    $scope.model = mergeSort($scope.model,sortBy);
                }
                var columns = $attrs.columns.split(',');
                var gridColumn = $scope.$eval($attrs.gridColumn);
                var frameColumn = $scope.$eval($attrs.frameColumn);
                var frameRow = $scope.$eval($attrs.frameRow);
                var length = $scope.model.length;
                var gridRow = Math.ceil(length / gridColumn);
                var frame_html = "<div class='frame_grid' tabindex='0'>";
                var color_step = Math.floor(255 / length);
                var item_color = 0;

                var pRow = 0;
                var pCol = 0;

                $scope.modifiedDate = Date.now();
                var grid_matrix = createGridMatrix(gridRow,gridColumn,length);
                $scope.navigate = function (event) {
                    var code = event.which;
                    if (code === 119) {//up
                        --pRow;
                        if(pRow < 0)
                            pRow += gridRow;
                        $scope.modifiedDate = Date.now();
                    } else if (code === 122) {//down
                        ++pRow;
                        $scope.modifiedDate = Date.now();
                    } else if (code === 115) {//right
                        ++pCol;
                        $scope.modifiedDate = Date.now();
                    } else if (code === 97) {//left
                        --pCol;
                        if(pCol < 0)
                            pCol += gridColumn;
                        $scope.modifiedDate = Date.now();
                    }
                    //alert($scope.pRow + ' ' + $scope.pCol)
                }

                $scope.renderGrid =  function(element){

                    frame_html = "<div class='frame_grid' tabindex='0'>";
                    var frame_arr = createFrameMatrix(grid_matrix, frameColumn, frameRow, pRow, pCol);
                    for(var i=0;i<gridRow;++i) {
                        for (var j = 0; j < gridColumn; ++j) {
                            if(grid_matrix[i][j] != 0) {
                                item_color = color_step * grid_matrix[i][j];

                                var found = -1;
                                for(var k=0;k<frame_arr.length;++k) {
                                    found = frame_arr[k].indexOf(grid_matrix[i][j]);
                                    if (found > -1)
                                        break;
                                }

                                if(found > -1)
                                    frame_html += "<div class='frame_grid_item' style='background-color: yellow'>";
                                else
                                    frame_html += "<div class='frame_grid_item' style='background-color: rgb(" + item_color + ",0,0);'>";
                                for(k=0;k<columns.length;++k) {
                                    frame_html += $scope.model[grid_matrix[i][j] - 1][columns[k]];
                                    frame_html += "<br/>";
                                }
                                frame_html += "</div>";
                            }else{
                                frame_html += "<div class='frame_grid_item' style='visibility: hidden'></div>";
                            }
                        }

                        frame_html +="<div style='clear:both'></div>";
                    }

                    frame_html += "</div>";
                    element.html(frame_html);
                }

                $scope.renderFrame = function (element){

                    frame_html = "<div class='frame_grid' tabindex='0'>";
                    var frame_arr = createFrameMatrix(grid_matrix, frameColumn, frameRow, pRow, pCol);
                    for(i=0;i<frame_arr.length;++i) {
                        for (j = 0; j < frame_arr[i].length; ++j) {
                            if(frame_arr[i][j] != 0) {
                                item_color = color_step * frame_arr[i][j];
                                frame_html += "<div class='frame_grid_item' style='background-color: rgb(" + item_color + ",0,0);'>";
                                for(k=0;k<columns.length;++k) {
                                    frame_html += $scope.model[frame_arr[i][j] - 1][columns[k]];
                                    frame_html += "<br/>";
                                }
                                frame_html += "</div>";
                            }else{
                                frame_html += "<div class='frame_grid_item' style='visibility: hidden'></div>";
                            }
                        }

                        frame_html +="<div style='clear:both'></div>";
                    }

                    frame_html += "</div>";
                    element.html(frame_html);
                }

            }
        };
    }

    function createGridMatrix(gridRow, gridColumn, length) {
        var count = 1;
        var grid_arr = new Array(gridRow);

        for (var i = 0; i < gridRow; ++i) {
            grid_arr[i] = new Array(gridColumn);
        }

        for (var i = 0; i < gridRow; ++i)
            for (var j = 0; j < gridColumn; ++j) {
                if (count <= length) {
                    grid_arr[i][j] = count;
                }
                else
                    grid_arr[i][j] = 0;
                ++count;
            }

        return grid_arr;
    }

    function createFrameMatrix(gridMatrix, frameColumn, frameRow, pRow, pCol) {

        var gridRow = gridMatrix.length;
        var gridColumn = gridMatrix[0].length;
        var frame_arr = new Array(frameRow);
        for (var i = 0; i < frameRow; ++i) {
            frame_arr[i] = new Array(frameColumn);
        }

        var row;
        var col;

        for (var i = 0; i < frameRow; ++i) {
            for (var j = 0; j < frameColumn; ++j) {

                row = (pRow + i)%gridRow;
                col = (pCol + j)%gridColumn;
                frame_arr[i][j] = gridMatrix[row][col];
            }
        }

        return frame_arr;
    }


    function mergeSort(list, columnName){

        if(list.length == 1)
            return list;

        var middle = Math.floor(list.length / 2 );
        var leftList = list.slice(0,middle);
        var rightList = list.slice(middle);
        leftList = mergeSort(leftList, columnName);
        rightList = mergeSort(rightList, columnName);
        return merge(leftList,rightList , columnName);
    }

    function merge(leftList, rightList, columnName){

        var temp = [];
        var index = 0;

        while(leftList.length > 0 && rightList.length > 0)
        {
            if(leftList[0][columnName] > rightList[0][columnName]){
                temp.push(leftList.shift());
            }else
                temp.push(rightList.shift());
        }

        while(leftList.length > 0)
        {
            temp.push(leftList.shift());
        }

        while(rightList.length > 0)
        {
            temp.push(rightList.shift());
        }

        return temp;
    }


}());
