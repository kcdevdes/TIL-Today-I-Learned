//
//  ViewController.swift
//  RPS Game
//
//  Created by Gibeom Choi on 6/4/25.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var mainLabel: UILabel!
    
    @IBOutlet weak var computerImageView: UIImageView!
    @IBOutlet weak var myImageView: UIImageView!
    
    @IBOutlet weak var computerChoiceLabel: UILabel!
    @IBOutlet weak var myChoiceLabel: UILabel!
    
    var myChoice: Rps = .rock
    var computerChoice: Rps = Rps(rawValue: Int.random(in: 0...2))!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        computerImageView.image = #imageLiteral(resourceName: "ready")
        myImageView.image = #imageLiteral(resourceName: "ready")
        
        computerChoiceLabel.text = "Ready"
        myChoiceLabel.text = "Ready"
    }
    
    @IBAction func rpsButtonTapped(_ sender: UIButton) {
        let title = sender.titleLabel!.text!
        
        switch title {
        case "Rock":
            myChoice = .rock
        case "Paper":
            myChoice = .paper
        case "Scissors":
            myChoice = .scissors
        default:
            break
        }
    }
    
    @IBAction func selectButtonTapped(_ sender: UIButton) {
        switch computerChoice {
        case .rock:
            computerChoiceLabel.text = "Rock"
            computerImageView.image = #imageLiteral(resourceName: "rock")
        case .paper:
            computerChoiceLabel.text = "Paper"
            computerImageView.image = #imageLiteral(resourceName: "paper")
        case .scissors:
            computerChoiceLabel.text = "Scissors"
            computerImageView.image = #imageLiteral(resourceName: "scissors")
        }
        
        switch myChoice {
        case .rock:
            myChoiceLabel.text = "Rock"
            myImageView.image = #imageLiteral(resourceName: "rock")
        case .paper:
            myChoiceLabel.text = "Paper"
            myImageView.image = #imageLiteral(resourceName: "paper")
        case .scissors:
            myChoiceLabel.text = "Scissors"
            myImageView.image = #imageLiteral(resourceName: "scissors")
        }
        
        if computerChoice == myChoice {
            mainLabel.text = "Draw"
        } else if computerChoice == .rock && myChoice == .scissors {
            mainLabel.text = "You win!"
        } else if computerChoice == .paper && myChoice == .rock {
            mainLabel.text = "You win!"
        } else if computerChoice == .scissors && myChoice == .paper {
            mainLabel.text = "You win!"
        } else {
            mainLabel.text = "You lose!"
        }
    }
    
    @IBAction func resetButtonTapped(_ sender: UIButton) {
        computerImageView.image = #imageLiteral(resourceName: "ready")
        myImageView.image = #imageLiteral(resourceName: "ready")
        
        computerChoiceLabel.text = "Ready"
        myChoiceLabel.text = "Ready"
        
        computerChoice = Rps(rawValue: Int.random(in: 0...2))!
    
        mainLabel.text = "Ready"
    }
    
}

