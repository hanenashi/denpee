# Denpee 🧾

A smart, web-based Japanese receipt (領収証 - *Ryoshusho*) generator and calculator.

**🔗 Live Demo:** [https://hanenashi.github.io/denpee/](https://hanenashi.github.io/denpee/)

### 🌟 Key Features
* **Smart Calculation:** Instantly calculates totals for **10%** (Eat-in) and **8%** (Takeout) using Standard Rounding (四捨五入).
* **Auto-Fill Memo:** Automatically generates the "Purpose" (但) text based on inputs:
    * *Eat-in only:* "ご飲食代として"
    * *Takeout only:* "テイクアウト代(軽減対象)として"
    * *Both:* "ご飲食代、テイクアウト代(軽減対象)として"
* **Detailed Tax Breakdown:** Auto-formats tax lines (e.g., `9,600円 (税込) 873円`).
* **Smart Zoom:** Automatically scales the receipt to fit 95% of any screen size (Mobile/Desktop) without scrollbars.
* **Print Ready:** Hides control panels and centers the receipt perfectly when printing (`Cmd+P`).

### 🚀 How to use
1.  Open the [Live Demo](https://hanenashi.github.io/denpee/) (or run `index.html` locally).
2.  Enter the **Eat-in** and **Takeout** totals in the top control bar.
3.  The receipt updates instantly (Big Total, Tax breakdown, and Memo).
4.  Enter the Customer Name (`様`) and Date (`入金日`).
5.  Press **Cmd+P** (or Ctrl+P) to print.

### ⚙️ System Details
* **Registration Number:** Pre-set to `T2810881971678` (aligned left).
* **File Structure:** Single-file HTML/CSS/JS for easy portability.