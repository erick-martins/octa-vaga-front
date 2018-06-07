<template>
  <div class="drop-area">
    <div id="top-bar">
      <button type="button" class="btn btn-link" @click="viewSourceCode" data-toggle="modal" data-target="#sourceCodeModal">View Code</button>
      <button type="button" class="btn btn-link" @click="downloadHTML">Download Template</button>
    </div>
    <div class="modal fade" id="sourceCodeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="sourceCodeModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!--?prettify lang=html linenums=true skin=sunburst?-->
            <pre class="prettyprint" id="preview"></pre>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="downloadHTML">Download</button>
          </div>
        </div>
      </div>
    </div>
    <draggable v-model="dropComponents" class="components-drop" :options="dropOptions">
      <div v-for="(component, index) in dropComponents" :key="component.id">

        <!-- INPUT COMPONENT -->
        <div v-if="component.type == 'input'" class="form-component">
          <div :class="'component-panel component-panel-' +component.editing">
            <a v-if="!component.editing" class="component-panel-edit" @click="component.editing = true"><i class="fas fa-edit"></i></a>
            <a v-else class="component-panel-edit" @click="component.editing = false"><i class="fas fa-save"></i></a>
            <a v-if="!component.editing" class="component-panel-close" @click="dropComponents.splice(index, 1)"><i class="fas fa-times"></i></a>
            <div v-show="component.editing" class="editor">
              <strong>General</strong>
              <div class="form-group row">
                <label :for="'component-placeholder-' +component.id" class="col-sm-4 col-form-label">Input placeholder</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Input placeholder"
                         v-model="component.placeholder" :id="'component-placeholder-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-title-' +component.id" class="col-sm-4 col-form-label">Input title</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Field title"
                         v-model="component.title" :id="'component-title-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-name-' +component.id" class="col-sm-4 col-form-label">Name</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Field name"
                         v-model="component.name" :id="'component-name-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-inputtype-' +component.id" class="col-sm-4 col-form-label">Input Type</label>
                <div class="col-sm-8">
                  <select class="form-control" v-model="component.inputType"
                         :id="'component-inputtype-' +component.id">
                         <option value="text">Text</option>
                         <option value="number">Number</option>
                         <option value="email">Email</option>
                         <option value="url">URL</option>
                         <option value="tel">Phone Number</option>
                         <option value="date">Date</option>
                         <option value="time">Time</option>
                         <option value="month">Month</option>
                         <option value="week">Week</option>
                         <option value="range">Range</option>
                         <option value="password">Password</option>
                  </select>
                </div>
              </div>
              <strong>Label</strong>
              <div class="form-group row">
                <label :for="'component-label-background-' +component.id" class="col-sm-4 col-form-label">Background Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the background color here" v-model="component.style.label.background"
                         :id="'component-label-background-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-label-color-' +component.id" class="col-sm-4 col-form-label">Text Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the text color here" v-model="component.style.label.color"
                         :id="'component-label-color-' +component.id">
                </div>
              </div>
              <strong>Input</strong>
              <div class="form-group row">
                <label :for="'component-background-' +component.id" class="col-sm-4 col-form-label">Background Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the background color here" v-model="component.style.component.background"
                         :id="'component-background-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-color-' +component.id" class="col-sm-4 col-form-label">Text Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the text color here" v-model="component.style.component.color"
                         :id="'component-color-' +component.id">
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label :for="'input-' +component.id" :style="'background-color:' + component.style.label.background + ';color:' + component.style.label.color + ';'">{{component.title}}</label>
            <input :type="component.inputType" :name="component.name" class="form-control" :placeholder="component.placeholder" :id="'input-' +component.id" :style="'background-color:' + component.style.component.background + ';color:' + component.style.component.color + ';'">
          </div>
        </div>

        <!-- CHECKBOX COMPONENT -->
        <div v-else-if="component.type == 'checkbox-list'" class="form-component">
          <div :class="'component-panel component-panel-' +component.editing">
            <a v-if="!component.editing" class="component-panel-edit" @click="component.editing = true"><i class="fas fa-edit"></i></a>
            <a v-else class="component-panel-edit" @click="component.editing = false"><i class="fas fa-save"></i></a>
            <a v-if="!component.editing" class="component-panel-close" @click="dropComponents.splice(index, 1)"><i class="fas fa-times"></i></a>
            <div v-show="component.editing" class="editor">
              <strong>Items</strong>
              <div class="form-group row">
                <label :for="'component-placeholder-' +component.id" class="col-sm-4 col-form-label">Items</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Input placeholder"
                         v-model="component.items" :id="'component-placeholder-' +component.id">
                  <small class="form-text text-muted">Separate items using semicolon ";"</small>
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-title-' +component.id" class="col-sm-4 col-form-label">Input title</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Field title"
                         v-model="component.title" :id="'component-title-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-name-' +component.id" class="col-sm-4 col-form-label">Name</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Checkboxes' name"
                         v-model="component.name" :id="'component-name-' +component.id">
                </div>
              </div>
              <strong>Label</strong>
              <div class="form-group row">
                <label :for="'component-label-background-' +component.id" class="col-sm-4 col-form-label">Background Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the background color here" v-model="component.style.label.background"
                         :id="'component-label-background-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-label-color-' +component.id" class="col-sm-4 col-form-label">Text Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the text color here" v-model="component.style.label.color"
                         :id="'component-label-color-' +component.id">
                </div>
              </div>
              <strong>Checkbox Labels</strong>
              <div class="form-group row">
                <label :for="'component-background-' +component.id" class="col-sm-4 col-form-label">Background Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the background color here" v-model="component.style.component.background"
                         :id="'component-background-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-color-' +component.id" class="col-sm-4 col-form-label">Text Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the text color here" v-model="component.style.component.color"
                         :id="'component-color-' +component.id">
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label :for="'input-' +component.id" :style="'background-color:' + component.style.label.background + ';color:' + component.style.label.color + ';'">{{component.title}}</label>
            <div v-for="(item, index) in component.items.split(';')" :key="component.id" class="form-check">
              <label class="form-check-label" :for="'checkbox-' + component.id + '-' + index" :style="'background-color:' + component.style.component.background + ';color:' + component.style.component.color + ';'">
                <input type="checkbox" :name="component.name" class="form-check-input" :id="'checkbox-' + component.id + '-' + index"> {{ item }}</label>
            </div>
          </div>
        </div>


        <!-- BUTTON COMPONENT -->
        <div v-else class="form-component">
          <div :class="'component-panel component-panel-' +component.editing">
            <a v-if="!component.editing" class="component-panel-edit" @click="component.editing = true"><i class="fas fa-edit"></i></a>
            <a v-else class="component-panel-edit" @click="component.editing = false"><i class="fas fa-save"></i></a>
            <a v-if="!component.editing" class="component-panel-close" @click="dropComponents.splice(index, 1)"><i class="fas fa-times"></i></a>
            <div v-show="component.editing" class="editor">

              <div class="form-group row">
                <label :for="'component-title-' +component.id" class="col-sm-4 col-form-label">Button Text</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Button Text"
                         v-model="component.title" :id="'component-title-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-name-' +component.id" class="col-sm-4 col-form-label">Name</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Button name"
                         v-model="component.name  " :id="'component-name-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-inputtype-' +component.id" class="col-sm-4 col-form-label">Button Type</label>
                <div class="col-sm-8">
                  <select class="form-control" v-model="component.inputType"
                         :id="'component-inputtype-' +component.id">
                         <option value="button">Normal</option>
                         <option value="reset">Reset</option>
                         <option value="submit">Submit</option>
                  </select>
                </div>
              </div>
              <strong>Style</strong>
              <div class="form-group row">
                <label :for="'component-skin-' +component.id" class="col-sm-4 col-form-label">Skin</label>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label :class="'btn btn-secondary ' + (component.skin == 'primary' ? 'active' : '')">
                    <input type="radio" name="skin" id="skin-primary" value="primary" v-model="component.skin"> primary
                  </label>
                  <label :class="'btn btn-secondary ' + (component.skin == 'secondary' ? 'active' : '')">
                    <input type="radio" name="skin" id="skin-secundary" value="secundary" v-model="component.skin"> secundary
                  </label>
                  <label :class="'btn btn-secondary ' + (component.skin == 'success' ? 'active' : '')">
                    <input type="radio" name="skin" id="skin-success" value="success" v-model="component.skin"> success
                  </label>
                  <label :class="'btn btn-secondary ' + (component.skin == 'danger' ? 'active' : '')">
                    <input type="radio" name="skin" id="skin-danger" value="danger" v-model="component.skin"> danger
                  </label>
                  <label :class="'btn btn-secondary ' + (component.skin == 'warning' ? 'active' : '')">
                    <input type="radio" name="skin" id="skin-warning" value="warning" v-model="component.skin"> warning
                  </label>
                  <label :class="'btn btn-secondary ' + (component.skin == 'info' ? 'active' : '')">
                    <input type="radio" name="skin" id="skin-info" value="info" v-model="component.skin"> info
                  </label>
                  <label :class="'btn btn-secondary ' + (component.skin == 'dark' ? 'active' : '')">
                    <input type="radio" name="skin" id="skin-dark" value="dark" v-model="component.skin"> dark
                  </label>
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-background-' +component.id" class="col-sm-4 col-form-label">Background Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the background color here" v-model="component.style.component.background"
                         :id="'component-background-' +component.id">
                </div>
              </div>
              <div class="form-group row">
                <label :for="'component-color-' +component.id" class="col-sm-4 col-form-label">Text Color</label>
                <div class="col-sm-8">
                  <input class="form-control" type="text" placeholder="Enter the color here" v-model="component.style.component.color"
                         :id="'component-color-' +component.id">
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <button :type="component.inputType" :name="component.name" :class="'btn btn-'+component.skin" :style="'background-color:' + component.style.component.background + ';color:' + component.style.component.color + ';'">{{component.title}}</button>
          </div>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    components: {
      draggable
    },
    data() {
      return {
        dropComponents: []
      }
    },
    computed: {
      dropOptions () {
        return  {
          group: 'items'
        };
      }
    },
    methods: {
      downloadHTML() {
        console.log('download');
        let sourceCode = this.getSourceCode();
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(sourceCode));
        element.setAttribute('download', 'form.html');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      },
      viewSourceCode(){
        let sourceCode = this.getSourceCode();
        document.getElementById("preview").innerHTML = this.htmlEscape(sourceCode);
      },
      htmlEscape : function(str) {
        return str
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
  		},
      beautify(str){
          return tidy_html5(str, {
            "indent":"auto",
            "indent-spaces":4,
            "wrap":80,
            "markup":true,
            "output-xml":false,
            "numeric-entities":true,
            "quote-marks":true,
            "quote-nbsp":false,
            "show-body-only":false,
            "quote-ampersand":false,
            "break-before-br":true,
            "uppercase-tags":false,
            "uppercase-attributes":false,
            "drop-font-tags":true,
            "tidy-mark":false
          });
      },
      getSourceCode(){
        let clone=$(".components-drop").clone()
        clone.find('.component-panel').remove();
        let form = clone.html();
        var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>App Teste para BeXs</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"></head><body><div class="container">'+ form +'</div></body></html>'

        return this.beautify(html);
      }
    }
  }
</script>
