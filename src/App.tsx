import { useState } from 'react'
import { useUndoStore } from './store'

function App() {
  const [inputValue, setInputValue] = useState('')
  const { items, addItem, toggleItem, removeItem, clearCompleted } = useUndoStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addItem(inputValue)
      setInputValue('')
    }
  }

  const completedCount = items.filter(item => item.isCompleted).length
  const pendingCount = items.length - completedCount

  const handleTest = () => {
    window.parent.postMessage({ pluginMessage: { type: 'test' } }, '*')
  }

  return (
    <div className="flex items-start justify-center min-h-screen p-3 sm:p-4 sm:items-center">
      <div className="w-full max-w-2xl pt-4 sm:pt-0">
        {/* 헤더 */}
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl sm:mb-4">
            🛑 오늘도 안 할 예정
          </h1>
          <p className="px-2 text-base font-medium leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
            하고 싶은 일은 많지만…<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            오늘은 <strong>아무 것도 안 하기로</strong> 했습니다.
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="mb-6 undo-card sm:mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="오늘 안 할 일을 적어주세요... 🦥"
              className="flex-1 undo-input"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <button type="submit" className="w-full undo-button shrink-0 sm:w-auto">
              안 하기 등록
            </button>
          </form>

          <button className="bg-red-600 text-amber-50" type="button" onClick={handleTest}>
            추가 버튼
          </button>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 gap-3 mb-6 sm:gap-4 sm:mb-8">
          <div className="text-center undo-card">
            <div className="text-2xl font-bold sm:text-3xl text-primary-600">{pendingCount}</div>
            <div className="text-sm text-gray-600 sm:text-base">안 할 예정</div>
          </div>
          <div className="text-center undo-card">
            <div className="text-2xl font-bold text-green-600 sm:text-3xl">{completedCount}</div>
            <div className="text-sm text-gray-600 sm:text-base">잘 안했음 🎉</div>
          </div>
        </div>

        {/* 아이템 리스트 */}
        <div className="space-y-3 sm:space-y-4">
          {items.length === 0 ? (
            <div className="py-8 text-center undo-card sm:py-12">
              <div className="mb-3 text-4xl sm:text-6xl sm:mb-4">😴</div>
              <p className="text-base text-gray-500 sm:text-lg">
                아직 안 할 일이 없네요!<br />
                게으름의 첫 걸음을 시작해보세요.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className={`undo-card flex items-start gap-3 sm:gap-4 ${
                  item.isCompleted ? 'bg-green-50 border-green-200' : ''
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`touch-target shrink-0 w-8 h-8 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    item.isCompleted
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-primary-400 active:border-primary-500'
                  }`}
                >
                  {item.isCompleted && <span className="text-sm sm:text-xs">✓</span>}
                </button>
                
                <div className="flex-1 min-w-0 pt-1">
                  <p className={`break-words ${
                    item.isCompleted 
                      ? 'line-through text-gray-500' 
                      : 'text-gray-800'
                  }`}>
                    {item.text}
                  </p>
                  {item.isCompleted && (
                    <p className="mt-1 text-xs font-medium text-green-600 sm:text-sm">
                      잘 안했다! 오늘도 성공적인 하루네요 🎉
                    </p>
                  )}
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xl text-red-400 transition-colors duration-200 touch-target shrink-0 hover:text-red-600 active:text-red-700 sm:text-lg"
                  title="삭제"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {/* 하단 액션 */}
        {completedCount > 0 && (
          <div className="mt-6 text-center sm:mt-8">
            <button
              onClick={clearCompleted}
              className="bg-green-100 text-green-700 px-4 sm:px-6 py-3 rounded-lg hover:bg-green-200 active:bg-green-300 transition-colors duration-200 min-h-[44px]"
            >
              잘 안한 일들 정리하기 ✨
            </button>
          </div>
        )}

        {/* 푸터 */}
        <div className="px-4 mt-8 text-sm text-center text-gray-500 sm:mt-12 sm:text-base">
          <p>이 앱은 게으름을 인정하는 사람들에게 바칩니다.</p>
          <p className="font-medium">잘 안했다. 당신은 오늘도 멋졌어요.</p>
        </div>
      </div>
    </div>
  )
}

export default App 