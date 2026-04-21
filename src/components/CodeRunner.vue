<template>
  <div class="code-runner">
    <div class="code-runner-header">
      <h4 class="code-runner-title">{{ title }}</h4>
      <div class="code-runner-controls">
        <button 
          class="run-button"
          @click="runCode"
          :disabled="isRunning"
        >
          {{ isRunning ? '运行中...' : '运行代码' }}
        </button>
        <button 
          class="toggle-button"
          @click="isCollapsed = !isCollapsed"
        >
          {{ isCollapsed ? '展开' : '折叠' }}
        </button>
      </div>
    </div>
    
    <div v-if="!isCollapsed" class="code-runner-content">
      <div class="editor-container">
        <div ref="codeEditor"></div>
      </div>
      
      <div v-if="output" class="output-container">
        <h5>输出结果：</h5>
        <pre class="output">{{ output }}</pre>
      </div>
      
      <div v-if="error" class="error-container">
        <h5>错误信息：</h5>
        <pre class="error">{{ error }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { EditorState } from '@codemirror/state'
import { EditorView, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine } from '@codemirror/view'
import { python } from '@codemirror/lang-python'
import { history } from '@codemirror/commands'
import { keymap } from '@codemirror/view'
import { defaultKeymap, historyKeymap, indentWithTab } from '@codemirror/commands'

// Props
const props = defineProps({
  title: {
    type: String,
    default: '代码示例'
  },
  initialCode: {
    type: String,
    default: ''
  }
})

// State
const code = ref(props.initialCode)
const output = ref('')
const error = ref('')
const isRunning = ref(false)
const isCollapsed = ref(false)
const codeEditor = ref(null)
let editorView = null

// Watch for changes in initialCode
watch(() => props.initialCode, (newCode) => {
  code.value = newCode
  if (editorView) {
    editorView.dispatch({
      changes: {
        from: 0,
        to: editorView.state.doc.length,
        insert: newCode
      }
    })
  }
})

// Run code function
const runCode = async () => {
  output.value = ''
  error.value = ''
  isRunning.value = true
  
  try {
    // Get code from editor
    if (editorView) {
      code.value = editorView.state.doc.toString()
    }
    
    // Create a sandboxed environment
    const sandbox = {
      console: {
        log: (...args) => {
          args.forEach(arg => {
            output.value += String(arg) + '\n'
          })
        }
      },
      print: (...args) => {
        args.forEach(arg => {
          output.value += String(arg) + '\n'
        })
      }
    }
    
    // Execute code
    const codeToRun = code.value
    const wrappedCode = `
      (function() {
        ${codeToRun}
      }).call(this)
    `
    
    // Use Function constructor for better security than eval
    const fn = new Function('console', 'print', wrappedCode)
    fn(sandbox.console, sandbox.print)
  } catch (err) {
    error.value = err.toString()
  } finally {
    isRunning.value = false
  }
}

// Mount CodeMirror
onMounted(() => {
  if (codeEditor.value) {
    const startState = EditorState.create({
      doc: code.value,
      extensions: [
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        drawSelection(),
        dropCursor(),
        rectangularSelection(),
        crosshairCursor(),
        highlightActiveLine(),
        history(),
        python(),
        EditorState.allowMultipleSelections.of(true),
        keymap.of([
          ...defaultKeymap,
          ...historyKeymap,
          indentWithTab
        ]),
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            code.value = update.state.doc.toString()
          }
        }),
        EditorView.lineWrapping,
        EditorView.theme({
          '&': {
            height: '100%',
            fontSize: '14px',
            fontFamily: '"Courier New", Courier, monospace'
          },
          '.cm-content': {
            padding: '10px',
            height: '100%',
            overflow: 'auto'
          },
          '.cm-gutters': {
            backgroundColor: '#f8f9fa',
            color: '#6c757d',
            border: 'none'
          },
          '.cm-activeLineGutter': {
            backgroundColor: '#e9ecef'
          },
          '.cm-activeLine': {
            backgroundColor: 'rgba(222, 226, 230, 0.5)'
          },
          '.cm-cursor': {
            borderLeftColor: '#495057'
          }
        })
      ]
    })

    editorView = new EditorView({
      state: startState,
      parent: codeEditor.value
    })
  }
})

// Cleanup
onUnmounted(() => {
  if (editorView) {
    editorView.destroy()
  }
})
</script>

<style scoped>
.code-runner {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.code-runner-header {
  background-color: #f0f0f0;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
}

.code-runner-title {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.code-runner-controls {
  display: flex;
  gap: 0.5rem;
}

.run-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.run-button:hover:not(:disabled) {
  background-color: #45a049;
}

.run-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.toggle-button {
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ccc;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s;
}

.toggle-button:hover {
  background-color: #e0e0e0;
}

.code-runner-content {
  padding: 1rem;
}

.editor-container {
  margin-bottom: 1rem;
  min-height: 200px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
}

.editor-container :deep(.cm-editor) {
  height: 100%;
  min-height: 200px;
}

.output-container,
.error-container {
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 4px;
}

.output-container {
  background-color: #f0f8f0;
  border: 1px solid #d4edda;
}

.error-container {
  background-color: #f8f0f0;
  border: 1px solid #f5c6cb;
}

.output-container h5,
.error-container h5 {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.output,
.error {
  margin: 0;
  padding: 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.output {
  background-color: white;
  border: 1px solid #c3e6cb;
}

.error {
  background-color: white;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

/* 悬浮效果 */
.code-runner {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.code-runner:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 折叠动画 */
.code-runner-content {
  transition: all 0.3s ease;
  overflow: hidden;
}

/* 确保按钮在折叠状态下仍然可见 */
.code-runner-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>