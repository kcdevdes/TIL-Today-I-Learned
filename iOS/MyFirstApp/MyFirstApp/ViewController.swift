//
//  ViewController.swift
//  MyFirstApp
//
//  Created by Gibeom Choi on 5/28/25.
//

/*
 화면 하나당 화면을 관리하는 코드
 ViewController - 화면과 연결되는 컨트롤러 (기본 설정)
 
 */

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var mainLabel: UILabel!
    @IBOutlet weak var myButton: UIButton!
    
    // 앱의 화면에 들어오면 처음 실행시키는 함수
    override func viewDidLoad() {
        super.viewDidLoad()
        
        mainLabel.text = "반가워요!"
        mainLabel.backgroundColor = UIColor.yellow
    }
    
    // 버튼을 눌렀을 때 실행되는 이벤트 함수
    @IBAction func pressed(_ sender: UIButton) {
        myButton.backgroundColor = UIColor.red
        myButton.setTitleColor(.black, for: .normal)
        mainLabel.text = "안녕하세요"
    }
    
}

