//
//  ViewController.swift
//  Dice Game
//
//  Created by Gibeom Choi on 6/4/25.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var firstImageView: UIImageView!
    @IBOutlet weak var secondImageView: UIImageView!
    var diceArray: [UIImage] = [#imageLiteral(resourceName: "black1"), #imageLiteral(resourceName: "black2"), #imageLiteral(resourceName: "black3"), #imageLiteral(resourceName: "black4"), #imageLiteral(resourceName: "black5"), #imageLiteral(resourceName: "black6")]

    override func viewDidLoad() {
        super.viewDidLoad()
        firstImageView.image = diceArray.first
        firstImageView.image = diceArray.first
        // Do any additional setup after loading the view.
    }

    @IBAction func rollButtonTapped(_ sender: UIButton) {
        firstImageView.image = diceArray.randomElement()
        secondImageView.image = diceArray.randomElement()
    }
}

